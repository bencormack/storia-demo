import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFVKAajN7urSpsaZziYkrkkvG0vPKsV-U",
  authDomain: "storia-demo-01.firebaseapp.com",
  projectId: "storia-demo-01",
  storageBucket: "storia-demo-01.appspot.com",
  messagingSenderId: "791410952348",
  appId: "1:791410952348:web:7ab2b581a3a402b7d24559"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
