import React, {useState, useEffect} from 'react'
import axios from 'axios'

function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState(null) 

    // same as httpPost.js below just const is added
    const postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts/',
            {
                title:  'Hello World!',
                body:'It works',
                userId:123,
            }
        //<-to verify our post request was successfull do this below (API 201 response means created)
        ).then(response => {
            setPostMessage(response.status === 201 ? (`Success! Title: ${response.data.title}`) : ('Failed'))
        })
        .catch(error => console.log(error.message))//https://jsonplaceholder.typicode.com/posts/asdasdad
    }

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        // https://jsonplaceholder.typicode.com/posts
        .then(response => {
            const data = Array.isArray(response.data) ? response.data : [response.data]
            setPosts(data)
        })
        .catch(error => {
            // 'https://jsonplaceholder.typicode.com/posts/143535' 404
            const err = error.message
            setError(err)
        })
    },[])

  return (
    <div>
        <button onClick={postToApi}>
            Create Post
        </button>
        <p>Response Message: {postMessage}</p>
        <h2>
            Posts:
        </h2>
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
            ) : (
                {error} ? (
                    <p>{error}</p>
                ) : (
                    <h4>Post Loading...</h4>
                )
            )
        }
      </div>
  )
}

export default HTTPHooks