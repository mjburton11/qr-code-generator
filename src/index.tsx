// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import QrCodeGenerator from './QrCodeGenerator';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QrCodeGenerator />
  </React.StrictMode>,
);
