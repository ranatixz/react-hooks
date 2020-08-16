import React from 'react'

const  User = ({details}) =>{

    const {
        id, username,
        firstname, lastname
    } = details

    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{username}</li>
                <li>{firstname}</li>
                <li>{lastname}</li>
            </ul>
        </div>
    )
}

export default User
