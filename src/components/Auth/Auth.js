import React from 'react';
import Login from './Login'

const Auth = App => 
    class extends React.Component{
        state = {
            username: '',
            loggedIn: false,
        }

        componentDidMount(){
            if(localStorage.getItem('user')){
                this.setState({ loggedIn: true })
            }else{
                this.setState({ loggedIn: false })
            }
        }

        changeHandler = e => {
            this.setState({uername: e.target.value})
        }

        loginHandler = () => {
            const user = this.state.username;
            localStorage.setItem('user', user);
            window.location.reload();
        }
        logoutHandler = () => {
           localStorage.removeItem('user')
           window.location.reload();
        }

        render(){
            if(this.state.loggedIn){
                return <App logout={this.logoutHandler}/>
            }else{
                return <Login login={this.loginHandler} value={this.state.username} changeHandler={this.changeHandler}/>
            }
        }


}

export default Auth;