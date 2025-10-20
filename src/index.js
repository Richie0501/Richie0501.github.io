import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './root';
// 引入 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入自訂 SCSS
import './assets/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
