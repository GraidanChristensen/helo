import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component{
    render(){
            return(
                <div>
                    <h5>{`Username: ${this.props.username}`}</h5>
                    <button><Link to="/dashboard">Home</Link></button>
                    <button><Link to="/new">New Post</Link></button>
                    <button><Link to="/">Logout</Link></button>
                    {console.log(this.props)}
                </div>
            )
        }
    
}
function mapStateToProps(state){
    return{
        username: state.username,
        picture: state.picture
    }
}
export default connect(mapStateToProps)(Nav);