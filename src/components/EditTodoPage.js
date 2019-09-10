import React, {Component} from 'react';
import styled from 'styled-components';

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
            <TodoFormWrapper>
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
            </TodoFormWrapper>
        )
    }
}
const TodoFormWrapper = styled.div`
    margin:10px;
  display: flex;
  justify-content: center;
  form{
    display: flex;
    width:50%;
    flex-direction: column;
    letter-spacing: 1px;
    font-size:15px;
    input[type=text]{
      padding:10px;
      font-size: 20px;
      text-transform: uppercase;
      outline:none;
      border:3px solid #4960B1;
      margin-bottom:10px;
    }
    textarea{
        padding:10px;
        font-size:20px;
        text-transform: uppercase;
        height:200px;
        outline:none;
        border:3px solid #4960B1;
    }
    button{
        width:120px;
        font-size:20px;
        background-color:#364B97;
        text-transform:uppercase;
        color:#fff;
        align-self:center;
        margin-top:10px;
        padding:15px;
    }
  }
`;
export default EditTodoPage;
