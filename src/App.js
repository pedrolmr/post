import React, { Component } from 'react';
import './App.css';

import { NavLink, Route, Switch } from 'react-router-dom'; 

class App extends Component {
  state = {
    todos: []
  }
  render(){
    return (
      <div className="App">
        <div className="Nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/create">Create</NavLink>
        </div>
      </div>
    );
  }
}

export default App;
