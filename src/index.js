import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/main.scss"
import App from './App';
import { HashRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


