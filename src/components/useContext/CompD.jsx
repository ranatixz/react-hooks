import React,{useContext} from 'react'
import {UserContext, CourseContext} from './AppUseContext'

const CompD = () =>{

    const user = useContext(UserContext)
    const course = useContext(CourseContext)

    return (
        <React.Fragment>
            <h1>User {user}</h1>
            <h1>Course {course}</h1>
        </React.Fragment>
    )
}

export default CompD
