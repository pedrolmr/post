import React, { Component } from 'react'

class CreateTodos extends Component {
    state = {
        title: "",
        description: ""
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.add(this.state.title, this.state.description)
        this.props.history.push("/");
    }

    render(){
        return(
            <div className="todo-form">
                <form onSubmit={this.handleSubmit}>
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
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
export default CreateTodos;
