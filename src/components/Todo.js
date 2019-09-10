import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Todo = props => {
    return (
        <TodoWrapper>
            <Link to={`/${props.todo.id}`}><h1>{props.todo.title}</h1></Link>
        </TodoWrapper>
    )
}

const TodoWrapper = styled.div`
  background:#DEDEDE;
  border-radius: 5px;
  width: 50%;
  padding: 10px;
  margin: 10px;
  a{
    text-decoration:none;
    color:#4960B1;
  }
`
export default Todo;
