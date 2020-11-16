// search input is saved to state. 
// checkbox has no function
// created sql posts but haven't done anything with them.

import React, { Component } from 'react';
import './Dashboard.css'
class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            searchInput: "",
            posts: [{
                id: 1, 
                title: "squid",
                author: 'graidan',
                authors_picture: "https://robohash.org/graidan.png"

            },
            {
                id: 2, 
                title: "sponge",
                author: 'graidan',
                authors_picture: "https://robohash.org/graidan.png"
            }]
        }
    }

    handleSearchInput = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }

    render(){
        const mappedPosts = this.state.posts.map((post, index) => {
            return( 
                    <div key={post.id} className='posts'>
                        <h1>{post.title}</h1>
                        <div className='rightSidePosts'>
                            <h5>{post.author}</h5>
                            <img alt='profile picture' src={post.authors_picture}/>
                        </div>
                    </div>
            )
        })
        return(
            <div className='dash'> 
                <div className='search'>
                    <div className='searchBar'>
                        <input onChange={this.handleSearchInput} type='text' placeholder='Search by Title...'/>
                        <button>Search</button>
                        <button>Reset</button>
                    </div>
                    <div className='checkbox' defaultValue='checked'>
                        <h5>My Post </h5>
                        <input type='checkbox'/>
                    </div>
                </div>

                <div className='postContainer'>
                    {mappedPosts}
                </div>
            </div>
        )
    }
}

export default Dashboard;