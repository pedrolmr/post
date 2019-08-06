import React, { Component } from 'react';

class Form extends Component{

    state = {
        name: ''
    }

    changeHandler = e => {
        this.setState({ name: e.target.value})
    }

    addPost = () => {

    }

    render(){
        return(
            <div className="Form">
                <form onSubmit={this.addPost}>
                    <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={this.state.name} onChange={this.changeHandler}/>
                    <button>Add</button>
                </form>
            </div>
        );
    }


}

export default Form;