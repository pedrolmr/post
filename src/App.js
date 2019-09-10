import React, { Component } from 'react';
import './App.css';

import { NavLink, Route, Switch } from 'react-router-dom'; 
import uuid from 'uuid';

import Todos from './components/Todos';
import CreateTodos from './components/CreateTodos';
import TodoPage from './components/TodoPage';
import EditTodoPage from './components/EditTodoPage';
import Navigation from './components/Navigation';

class App extends Component {
  state = {
    todos: [{ id: uuid(), title: 'first todo', description: 'this is the description.'}],
    filtered: []
  }
  
  add = (title, description) => {
    const newTodo = {id: uuid(), title:title, description: description}
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  delete = id => {
    const todo = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: todo });
  }

  update = (id, updatedTodo) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, todo: updatedTodo };
      }
      return todo;
    })
    this.setState({ todos: updatedTodos });
  }

  search = e => {
    const todos = this.state.todos.filter(t => {
      if(t.title.includes(e.target.value)){
        return t;
      }
    });
    this.setState({ filtered: todos});
  }

  render(){
    const getTodo = props => {
      let id = props.match.params.id;
      let currentTodo = this.state.todos.find(todo => todo.id === id)
      return <TodoPage {...props} todo={currentTodo} delete={this.delete}/>
    }

    const getTodoEditPage = props => {
      let id = props.match.params.id;
      let currentTodo = this.state.todos.find(todo => todo.id === id)
      return <EditTodoPage {...props} todo={currentTodo} update={this.update}/>
    }

    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route 
          exact 
          path="/" 
          render={props => <Todos todos={this.state.filtered.length > 0 ? this.state.filtered : this.state.todos} searchHandler={this.search}
          {...props} />} />

          <Route 
          exact 
          path="/create" 
          render={props => <CreateTodos add={this.add} 
          {...props} />} />

          <Route exact path="/:id" render={getTodo}/>
          <Route exact path="/:id/edit" render={getTodoEditPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
