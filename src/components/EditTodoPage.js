import React, {Component} from 'react';
import { Link } from "react-router-dom";

class EditTodoPage extends Component {
    state = {
        todo: this.props.todo,
        title: this.props.todo.title,
        description: this.props.todo.description,
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    updateTodo = e => {
        e.preventDefault();
        let updatedTodo = this.state.todo;
        updatedTodo.title = this.state.title;
        updatedTodo.description = this.state.description;
        this.props.update(this.props.todo.id, this.state.todo);
        this.setState({ isEditing: false })
        this.props.history.push("/")
    }

    render(){
        return (
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
    }
}
export default EditTodoPage;
