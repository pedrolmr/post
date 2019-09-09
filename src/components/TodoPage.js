import React, { Component } from "react";

class TodoPage extends Component {
    state = {
        todo: this.props.todo,
        title: this.props.todo.title,
        description: this.props.todo.description,
    }

    deleteTodo = e => {
        e.preventDefault();
        this.props.delete(this.props.todo.id);
        this.props.history.push("/");
    }

    todoEditPage = () => {
        this.props.history.push(`/${this.props.todo.id}/edit`);
    }

    render() {
        return (
            <div className="todo-page">
                <h1>{this.props.todo.title}</h1>
                <p>{this.props.todo.description}</p>
                <button onClick={this.todoEditPage}>Edit</button>
                <button onClick={this.deleteTodo}>Delete</button>
            </div>
        );
    }


};
export default TodoPage;
