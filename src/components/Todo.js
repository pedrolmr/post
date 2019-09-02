import React from 'react';
import { Link } from "react-router-dom";

const Todo = props => {
    return (
        <div className="todo">
            <Link to={`/${props.todo.id}`}><h1>{props.todo.title}</h1></Link>
        </div>
    )
}
export default Todo;
