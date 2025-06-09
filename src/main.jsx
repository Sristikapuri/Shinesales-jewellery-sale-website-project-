import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // Make sure the path and filename are correct
import './index.css';         // Optional, your CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
