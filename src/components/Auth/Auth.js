import React, { Component } from 'react';
import axios from 'axios';

class Auth extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    registerUser = async () => {
        const {username, password} = this.state;
        try{
            const user = await axios.post('/auth/register', {username, password})
            alert(user);
            this.props.history.push('/dashboard')
        }
        catch(err){
            alert(err.response.request.response)
        }
    }

    login = async () => {
        const {username, password} = this.state;
        try{
            const user = await axios.post('/auth/login', {username, password})
            this.props.history.push('/dashboard')
        }
        catch(err){
            alert(err.response.request.response)
        }
    }


    render(){
        return(
            <div>
                <div>
                <h5>Username:</h5>
                <input onChange={this.handleUsername} type='text'/>

                <h5>Password: </h5>
                <input onChange={this.handlePassword} type='text'/>
                </div>

                <button onClick={this.login}>Login</button>
                <button onClick={this.registerUser}>Register</button>

            </div>
        )
    }
}

export default Auth;