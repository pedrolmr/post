import React, { Component } from "react";

class TodoPage extends Component {
    state = {
        todo: this.props.todo,
        title: this.props.todo.title,
        description: this.props.todo.description,
        isEditing: false
    }
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    deleteTodo = e => {
        e.preventDefault();
        this.props.delete(this.props.todo.id);
        this.props.history.push("/");
    }

    updateTodo = e => {
        e.preventDefault();
        let updatedTodo = this.state.todo;
        updatedTodo.title = this.state.title;
        updatedTodo.description = this.state.description;
        this.props.update(this.props.todo.id, this.state.todo);
        this.setState({isEditing: false })
        this.props.history.push("/")
    }

    toggleForm = () => {
        this.setState({ isEditing: !this.state.isEditing})
    }

    render(){
        console.log("title:", this.state.title);
        console.log("description:", this.state.description);
        console.log("Props in TodoPage", this.props)
        let result;
        if(this.state.isEditing){
            result = (
                <form onSubmit={this.updateTodo}>
                    <label htmlFor="title">Title:</label>
                    <input
                        placeholder="Title"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeHandler}
                    />

                    <label htmlFor="description">Description:</label>
                    <textarea
                        placeholder="Add a description..."
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.changeHandler}
                    ></textarea>
                    <button>Update</button>
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
