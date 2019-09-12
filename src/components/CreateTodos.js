import React, { Component } from 'react'
import styled from 'styled-components';

class CreateTodos extends Component {
    state = {
        title: "",
        description: ""
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.add(this.state.title, this.state.description);
        this.props.history.push("/");
    }

    render(){
        return(
            <TodoFormWrapper>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Title"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeHandler}
                    />
                    <textarea
                        placeholder="Add a description..."
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.changeHandler}
                    ></textarea>
                    <button>Create</button>
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
export default CreateTodos;
