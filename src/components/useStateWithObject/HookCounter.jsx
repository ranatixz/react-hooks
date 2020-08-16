import React, {useState} from 'react'

const HookCounter = () =>{

    const [name, setName] = useState({firstname: '', lastname: ''})

    const onChangeHandler = e =>{
        setName({...name, [e.target.name]: e.target.value})
    }

    const onSubmitHandler = e =>{
        e.preventDefault()
        console.log(name)
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                     <h2>Your firstname: {name.firstname}</h2>
                </div>
                <div>
                     <h2>Your firstname: {name.lastname}</h2>
                </div>
                <div>
                    <h2>{JSON.stringify(name)}</h2>
                </div>
                <div>
                     <input 
                        type="text" 
                        name="firstname"
                        value={name.firstname} 
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                     <input 
                        type="text" 
                        name="lastname" 
                        value={name.lastname}
                        onChange={onChangeHandler}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default HookCounter
