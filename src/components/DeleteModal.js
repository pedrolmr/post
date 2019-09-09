import React from 'react'

const DeleteModal = props => {
    return (
        <div className="delete-modal">
            <h1>Are you sure you want to delete this?</h1>
            <button onClick={props.deleteToggleModal}>NO</button>
            <button onClick={props.deleteTodo}>DELETE</button>
        </div>
    )
}
export default DeleteModal;
