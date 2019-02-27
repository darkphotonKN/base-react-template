import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import './css/main.css';

ReactDOM.render(
  // Higher Order Component wrapped around the app to provide routing
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
