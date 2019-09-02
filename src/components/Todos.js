import React from 'react'
import Todo from './Todo';

const Todos = ({ todos }) => {
    return(
        <div className="todos">
            {todos.map(t => {
                return <Todo title={t.title} description={t.description}/>
            })}
        </div>
    )
}
export default Todos;
