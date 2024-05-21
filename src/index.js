import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/main.scss"
import App from './App';
import { HashRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <BrowserRouter basename="/myportffolioreact">
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );



