import React from 'react'

const Todo = ({title, description}) => {
    return (
        <div className="todo">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
export default Todo;
