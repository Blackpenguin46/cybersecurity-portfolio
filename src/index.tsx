import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure your CSS file is properly imported
import App from './App';

// Make sure you are using the correct root element for React 18+
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


