import axios from 'axios';
import React, { Component } from 'react';
import './Post.css'

class Post extends Component{
    constructor(){
        super();
        
        this.state={
            title: "",
            image: "",
            content: "",
            username: "",
            profilePicture: ""
        }
    }

    componentDidMount(){
        this.getPost();
    }

    getPost = async () => {
        console.log(this.props.match.params.postid)
        try{
            const post = await axios.get(`/post/${this.props.match.params.postid}`)
            this.setState({
                title: post.data[0].title,
                image: post.data[0].postpicture,
                content: post.data[0].content,
                username: post.data[0].username,
                profilePicture: post.data[0].picture
            });
        }
        catch(err){
            alert(err);
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