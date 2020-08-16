import React,{useReducer, useState} from 'react'

const initialStudent = {
    firstname: '',
    lastname: '',
    age: ''
}
const reducer = (state, action) =>{
    return {...state, [action.inputField]: action.inputVal}
}
const MyReducer = () =>{

    const [student, disPatch] = useReducer(reducer, initialStudent)
    const [display, setDisplay] = useState(false)

    const inputEventHandler = e =>{
        disPatch({
            inputField: e.target.name,
             inputVal: e.target.value
        })
        setDisplay(false)
    }
    return (
        <div>
            {
                display ? 
                    <div>
                        <h5>First name: {student.firstname}</h5>
                        <h5>Last name: {student.lastname}</h5>
                        <h5>Age: {student.age}</h5>
                    </div>
                :
                    null
            }
            <input 
                type='text' 
                value={student.firstname} 
                onChange={inputEventHandler} 
                name='firstname'
            />
            <input 
                type='text' 
                value={student.lastname} 
                onChange={inputEventHandler} 
                name='lastname'
            />
            <input 
                type='text' 
                value={student.age} 
                onChange={inputEventHandler} 
                name='age'
            />
            <button 
                type='submit'
                onClick={()=> setDisplay(!display)}
            >Submit</button>   
        </div>
    )
}

export default MyReducer
