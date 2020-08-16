import React, {useState} from 'react'
import useInput from '../../hooks/useInput'

const UseInputHook = () =>{


    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const onSubmitHandler = e =>{
        e.preventDefault()
        alert(`Firstname: ${firstName} Lastname: ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>firstname: </label>
                    <input 
                        type='text' 
                        {...bindFirstName}
                    />
                </div>
                <div>
                    <label>lastname: </label>
                    <input 
                        type='text' 
                        {...bindLastName}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UseInputHook
