import React, { Component } from 'react';
import logo from './logo.svg';
import PasswordInput from "./components/PasswordInput";
import './App.css';
import EmailInput from './components/EmailInput';
import BtnGroup from './components/BtnGroup';

function App() {
  return (
    <div className="App">
      <div id='input-field'>
        <EmailInput />
        <PasswordInput />
      </div>
      <div id='btn-field'>
        <BtnGroup />
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello World!</h1>
//       </header>
//     </div>
//   );
// }

export default App;
