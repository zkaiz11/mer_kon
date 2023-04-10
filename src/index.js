import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IoArrowBackOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from 'react-bootstrap';

const Header = (title) => 
  <>
    <Button><IoArrowBackOutline />Back</Button>
    <h2>{title.text}</h2>
  </>;
const WelcomeHeader = (title) => <><Header text="Welcome"/><p className='container-fluid'>{title.text}</p></>;

const welcome = ReactDOM.createRoot(document.getElementById('welcome'));
welcome.render(
  <React.StrictMode>
    <WelcomeHeader text="Join the world's largest YouTube streaming"/>
    <div id='form'>
      <p id='confirming'>Already have an account?</p>
      <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
