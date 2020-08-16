import React,{useState, useEffect} from 'react'

const DisplayData = ({post}) =>{

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

export default DisplayData
