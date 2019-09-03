import React from "react";

const TodoPage = props => {

    const deleteTodo = e => {
        e.preventDefault();
        props.delete(props.todo.id);
        props.history.push("/");
    }

    console.log("Props in TodoPage", props)
    if(!props.todo) {
       return <h1>Loading...</h1>
    }else{
        return (
            <div className="todo-page">
                <h1>{props.todo.title}</h1>
                <p>{props.todo.description}</p>
                <button>Edit</button>
                <button onClick={deleteTodo}>Delete</button>
            </div>
        );
    }
};
export default TodoPage;
