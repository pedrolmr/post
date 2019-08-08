import React, { Component } from "react";

class Login extends Component {
    render(){
        return(
            <div>
                <input type="text" value={this.props.value} onChange={this.props.changeHandler}/>
                <button onClick={() => this.props.login()}>Login</button>
            </div>
        )
    }
};

export default Login;
