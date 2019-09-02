import React, { Component } from 'react';
import './App.css';

import { NavLink, Route, Switch } from 'react-router-dom'; 
import uuid from 'uuid';

import Todos from './components/Todos';
import CreateTodos from './components/CreateTodos';
import TodoPage from './components/TodoPage';

class App extends Component {
  state = {
    todos: [
      {id: uuid(), title: 'first post', description: 'idkidkidkidk'}
    ]
  }

  addTodo = (title, description) => {
    const newTodo = {id: uuid(), title:title, description: description}
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render(){
    const getTodo = props => {
      let id = props.match.params.id;
      let currentTodo = this.state.todos.find(todo => todo.id === id)
      return <TodoPage {...props} todo={currentTodo}/>
    }
    return (
      <div className="App">
        <div className="Nav">
          <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
          <NavLink exact activeClassName="active-link" to="/create">Create</NavLink>
        </div>

        <Switch>
          <Route exact path="/" render={props => <Todos todos={this.state.todos} {...props} />}/>
          <Route exact path="/create" render={props => <CreateTodos addTodo={this.addTodo} {...props} />} />

          <Route exact path="/:id" render={getTodo}/>
        </Switch>
      </div>
    );
  }
}

export default App;
