import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // * BrowserRouter 불러오기
import App from './App';
import './index.css';

ReactDOM.render(
  // * App 을 BrowserRouter 로 감싸기 -> 라우터 적용끝
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
