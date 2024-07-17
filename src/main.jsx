import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './portfolio.css';
import { pdfjs } from 'react-pdf';

// Set up the workerSrc property
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
