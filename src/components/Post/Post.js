import React, { Component } from 'react';
import './Post.css'

class Post extends Component{
    constructor(){
        super();
        
        this.state={
            title: "Squid",
            image: "https://i.kym-cdn.com/entries/icons/facebook/000/003/047/omg.jpg",
            content: "Nice looking fella",
            username: "graidan",
            profilePicture: "https://robohash.org/185.39.11.105.png"
        }
    }
    render(){
        return(
            <div className="Post">
                <div className="content">
                    <div className="postTitle">
                        <h1>{this.state.title}</h1>
                        <div className = "postTitleProfile">
                            <h5>{this.state.username}</h5>
                            <img alt="Profile" src={this.state.profilePicture}/>
                        </div>
                    </div>
                    <div className="postContent">
                        <img alt="Post" src={this.state.image}/>
                        <p>{this.state.content}</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Post;