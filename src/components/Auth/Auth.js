import React, { Component } from 'react';

class Auth extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }
    render(){
        return(
            <div>
                <h5>Username:</h5>
                <input type='text'/>

                <h5>Password: </h5>
                <input type='text'/>
            </div>
        )
    }
}

export default Auth;