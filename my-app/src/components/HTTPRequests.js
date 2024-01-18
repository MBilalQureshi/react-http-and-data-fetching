import React, { Component } from 'react'

export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }
  render() {
    return (
      <div>
        <h2>
            Posts:
        </h2>
      </div>
    )
  }
}

export default HTTPRequests