import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import './index.css';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyDhNVeZKzT430RG0jjp-knBoT7utGZ82Og",
  authDomain: "habeeb-bio.firebaseapp.com",
  projectId: "habeeb-bio",
  storageBucket: "habeeb-bio.appspot.com",
  messagingSenderId: "149772551726",
  appId: "1:149772551726:web:bc0fcf8d4dd0a3703941bf",
  measurementId: "G-YNBBB3V3B5"
}

const app = initializeApp(firebaseConfig)
getAnalytics(app)

// Cache busting old ServiceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(registration => {
    registration.unregister();

    if (caches) {
      // Service worker cache should be cleared with caches.delete()
      caches.keys().then(async (names) => {
        await Promise.all(names.map(name => caches.delete(name)));
      });
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

