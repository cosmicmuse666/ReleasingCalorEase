import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();


// async function getBackendData() {
//   var result = await fetch('http://localhost:5000/mod/track');
//   var data = await result.json();
//   console.log(data);
// }


