import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Cache busting old ServiceWorker
caches.keys().then(function(names) {
  for (let name of names)
      caches.delete(name);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

