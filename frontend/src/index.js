import React from 'react';
import ReactDOM from 'react-dom';


// app component from app.js
import App from './app';

ReactDOM.render(
  // Your root component goes here
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
