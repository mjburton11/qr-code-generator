// QRCodeGenerator.tsx
import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QrCodeGenerator: React.FC = () => {
    const [url, setUrl] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>QR Code Generator</h1>
            <input
                type="text"
                placeholder="Enter URL here"
                value={url}
                onChange={handleInputChange}
                style={{ padding: '10px', width: '300px' }}
            />
            <div style={{ marginTop: '20px' }}>
                {url && <QRCodeSVG value={url} size={200} />}
            </div>
        </div>
    );
};

export default QrCodeGenerator;
