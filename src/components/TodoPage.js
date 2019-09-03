import React, { Component } from "react";

class TodoPage extends Component {
    state = {
        todo: this.props.todo,
        isEditing: false
    }
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    deleteTodo = e => {
        e.preventDefault();
        this.props.delete(this.props.todo.id);
        this.props.history.push("/");
    }

    updateTodo = e => {
        e.preventDefault();
        this.props.update(this.props.todo.id, this.state.todo);
        this.props.history.push("/")
    }

    toggleForm = () => {
        this.setState({ isEditing: !this.state.isEditing})
    }

    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <form onSubmit={this.updateTodo}>
                    <label htmlFor="title">Title:</label>
                    <input
                        placeholder="Title"
                        type="text"
                        name="title"
                        value={this.state.todo.title}
                        onChange={this.changeHandler}
                    />

                    <label htmlFor="description">Description:</label>
                    <textarea
                        placeholder="Add a description..."
                        type="text"
                        name="description"
                        value={this.state.todo.description}
                        onChange={this.changeHandler}
                    ></textarea>
                    <button>Add</button>
                </form>
            )
        }else{
            return (
                <div className="todo-page">
                    <h1>{this.props.todo.title}</h1>
                    <p>{this.props.todo.description}</p>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.deleteTodo}>Delete</button>
                </div>
            );
        }
        return result;
    }

};
export default TodoPage;
