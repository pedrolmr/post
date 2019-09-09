import React from 'react'
import Todo from './Todo';

const Todos = ({ todos }) => {
    return(
        <div className="todos">
            {todos.map(t => {
                return <Todo todo={t}/>;
            })}
        </div>
    )
}
export default Todos;
