import React from 'react'

const Post = ({post}) =>{
    const {title, body} = post
    return (
        <div>
            <ul>
                <li>Title: {title}</li>
                <li>Body: {body}</li>
            </ul>
        </div>
    )
}

export default Post
