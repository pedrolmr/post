import React, { Component } from 'react';
import './App.css';

import { NavLink, Route, Switch } from 'react-router-dom'; 

import Todos from './components/Todos';
import CreateTodos from './components/CreateTodos';

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

        <Switch>
          <Route exact path="/" render={props => <Todos {...props} />}/>
          <Route exact path="/create" render={props => <CreateTodos {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
