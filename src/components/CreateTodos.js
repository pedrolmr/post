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
        this.props.addTodo(this.state.title, this.state.description)
        this.props.history.push("/");
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.changeHandler}
                ></textarea>
                <button>Add</button>
            </form>
        )
    }
}
export default CreateTodos;
