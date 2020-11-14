import './App.css';
import React, { Component } from 'react';
import  Nav from './components/Nav/Nav';
// import Auth from './components/Auth/Auth';
// import Dashboard from './components/Dashboard/Dashboard';
// import Form from './components/Form/Form';
// import Post from './components/Post/Post';
import routes from './routes'; 
import {withRouter} from 'react-router';

class App extends Component{
    render(){
        return(
            <div className={this.props.location.pathname !== '/'? 'main': null}>
                {this.props.location.pathname !== '/'? <Nav /> : <div></div>}
                <div >
                    {routes}
                </div>
            </div>
        )
    }
}

export default withRouter(App);