import React from "react";

const TodoPage = props => {
    if(!props.todo) {
       return <h1>Loading...</h1>
    }else{
        return (
            <div className="todo-page">
                <h1>{props.todo.title}</h1>
                <p>{props.todo.description}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        );
    }
};
export default TodoPage;
