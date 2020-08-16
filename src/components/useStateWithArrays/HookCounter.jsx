import React, {useState} from 'react'
import { v4 as uuid } from 'uuid';
import User from './User'
const HookCounter = () =>{


    const [hasError, setHasError] = useState(false)
    const [users, setUsers] = useState([])

    const [user, setUser] = useState({
        id: '',
        username: '', 
        firstname: '',
        lastname: ''
    })

    const onChangeHanlder = e => {
        setUser({
            ...user, id: uuid(), [e.target.name]: e.target.value
        })
        setHasError(false)
    }

    const onSubmitHandler = e =>{
        e.preventDefault()
        const {id, username, firstname, lastname} = user
        if(id === '' || username === '' || firstname === '' || lastname === ''){
            setHasError(true)
        }else{
            setUsers([...users, user])
            document.getElementById('form-input').reset()
            setUser({...user, id:'', username: '', firstname: '', lastname: ''})
        }
    }
    return (
        <div>
            { hasError ? <h5>Invalid Action!</h5> : null}
            <form onSubmit={onSubmitHandler} method='post' id='form-input'>
                <div>
                    <input 
                        type="text" 
                        name="username" 
                        onChange={onChangeHanlder} 
                        value={users.username}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        name="firstname" 
                        onChange={onChangeHanlder}
                        value={user.firstname}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        name="lastname" 
                        onChange={onChangeHanlder}
                        value={user.lastname}
                    />
                </div>
                <button type="submit">Add user</button>
            </form>
            {
                users.map(user => <User key={user.id} details={user}/>)
            }
        </div>
    )
}

export default HookCounter