import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './components/App';


ReactDOM.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>,
  document.querySelector('#root')
);


