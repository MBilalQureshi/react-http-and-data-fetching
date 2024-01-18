import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title:  'Hello World!',
                body:'It workds',
                userId:123,
            }
        //<-to verify our post request was successfull do this below (API 201 response means created)
        ).then(response => console.log(response))
    }
  render() {
    return (
      <div>
        <button onClick={this.postToApi}>
            Create Post
        </button>
      </div>
    )
  }
}

export default HTTPPost