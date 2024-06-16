import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyled from './styled/GlobalStyle.js';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled/>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

