import React from 'react'
import Todo from './Todo';

const Todos = props => {
    return(
        <>
        <input placeholder="search" type="text" onKeyDown={props.searchHandler} />
        <div className="todos">
            {props.todos.map(t => {
                return <Todo todo={t}/>;
            })}
        </div>
        </>
    )
}
export default Todos;
