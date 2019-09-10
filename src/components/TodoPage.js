import React, { Component } from "react";
import DeleteModal from './DeleteModal';

import styled from 'styled-components';

class TodoPage extends Component {
    state = {
        todo: this.props.todo,
        title: this.props.todo.title,
        description: this.props.todo.description,
        delete: false
    }

    deleteTodo = e => {
        e.preventDefault();
        this.props.delete(this.props.todo.id);
        this.props.history.push("/");
    }

    deleteToggleModal = () => {
        this.setState({ delete: !this.state.delete});
    }

    todoEditPage = () => {
        this.props.history.push(`/${this.props.todo.id}/edit`);
    }

    render() {
        return (
            <TodoPageWrapper>
                <ContentArea>
                    <h1>{this.props.todo.title}</h1>
                    <p>{this.props.todo.description}</p>
                    <Buttons>
                        <Button onClick={this.todoEditPage}>Edit</Button>
                        <Button red onClick={this.deleteToggleModal}>Delete</Button>
                    </Buttons>
                </ContentArea>

                {this.state.delete && <DeleteModal deleteTodo={this.deleteTodo} deleteToggleModal={this.deleteToggleModal}/>}
            </TodoPageWrapper>
        );
    }
};
const TodoPageWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const ContentArea = styled.div`
    width:50%;
    p{
        flex-wrap:wrap;
    }
`;
const Buttons = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Button = styled.div`
    width: 120px;
    font-size: 20px;
    background-color: ${ props => props.red ? '#BC4C4C' : '#526CC6' };
    text-transform: uppercase;
    color: #fff;
    align-self: center;
    margin:10px;
    padding: 15px;
`;
export default TodoPage;
