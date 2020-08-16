import React,{useReducer, useState, useEffect} from 'react'
import {v4 as uuid} from 'uuid'

const initialState = {
    students:[]
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'addStudent':
            return {
                ...state,
                students: [...state.students, action.student]
            }
        case 'deleteStudent':
            return {
                ...state,
                students: state.students.filter(student =>{
                    return student.id !== action.id
                })
            }
        default:
            return state
    }
}

const ReducerWithAnArrOfObj = () =>{

    const [student, setStudent] = useState({
         id: '', firstname: '',
         lastname: '', age:''
    })

    const [data, dispatch] = useReducer(reducer, initialState)

     useEffect(()=>{
        console.log(data.students)
    },[data.students])

    const inputStudentEventHandler = e =>{
        setStudent({...student, id: uuid(), [e.target.name]: e.target.value})
    }

    const inputSubmitHanlder = e =>{
        e.preventDefault()
        const {
            id, firstname,
            lastname, age
        } = student

        if(id !== '' && firstname !== '' && lastname !== '' && age !== ''){
            dispatch({student, type: 'addStudent'})
            setStudent({id: '', firstname: '', lastname: '', age: ''})
        }
        
    }

    const deleteStudent = id =>{
        console.log(id)
        dispatch({id, type: 'deleteStudent'})
    }
    return (
        <div>
            <form 
                onSubmit={inputSubmitHanlder}
                method='post'>
                <input 
                    type='text' 
                    onChange={inputStudentEventHandler} 
                    value={student.firstname} 
                    name='firstname'
                />
                 <input 
                    type='text' 
                    onChange={inputStudentEventHandler} 
                    value={student.lastname} 
                    name='lastname'
                />
                 <input 
                    type='text' 
                    onChange={inputStudentEventHandler} 
                    value={student.age} 
                    name='age'
                />
                <button type='submit'>Submit</button>
               
            </form>

            <div>
                {
                    data.students.map(student =>{
                        return(
                            <ul key={student.id}>
                                <li>{student.firstname}</li>
                                <li>{student.lastname}</li>
                                <li>{student.age}</li>
                                <li>
                                    <button onClick={() => deleteStudent(student.id)}>delete</button>
                                </li>
                            </ul>
                        )    
                    })
                }
            </div>
        </div>
    )
}

export default ReducerWithAnArrOfObj
