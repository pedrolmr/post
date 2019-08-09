import React from 'react';
import './App.css';

import Form from './components/Form';
import Auth from './components/Auth/Auth'

function App(props) {
  return (
    <div className="App">
      <Form />
      <button onClick={() => props.logout()}>Log Out</button>
    </div> 
  );
}

export default Auth(App);
