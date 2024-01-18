import React, { Component } from 'react'
import axios from 'axios'

export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }
     
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response)
            this.setState({
                // check if data is array else if object put it an array to make it array
                posts: Array.isArray(response.data) ? response.data : [response.data]
            })
        })
    }
  render() {
    const posts = this.state.posts;
    return (
      <div>
        <h2>
            Posts:
        </h2>
        {/* {JSON.stringify(this.state.posts)} */}
        {
            posts.length ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.id}. {post.title}</h2>
                        <h4>By User Id:{post.userId}</h4>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            ) : (<h4>Post Loading...</h4>)
        }
      </div>
    )
  }
}

export default HTTPRequests