import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse : null
      }
    }
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts/',
            {
                title:  'Hello World!',
                body:'It workds',
                userId:123,
            }
        //<-to verify our post request was successfull do this below (API 201 response means created)
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        }).catch(error => console.log(error.message))//https://jsonplaceholder.typicode.com/posts/asdasdad
    }
  render() {
    const {apiResponse} = this.state
    return (
      <div>
        <button onClick={this.postToApi}>
            Create Post
        </button>
        {
            apiResponse ? (
                <div>
                    <h2>{apiResponse.title}</h2>
                    <h4>post Id:{apiResponse.id}</h4>
                    <p>{apiResponse.body}</p>
                    <p>User ID:{apiResponse.userId}</p>
                </div>
            ) : (
                <p>
                    Please click the button above
                </p>
            )
        }
      </div>
    )
  }
}

export default HTTPPost