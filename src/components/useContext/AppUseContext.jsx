import React from 'react'
import CompA from './CompA'
import CompC from './CompC'

export const UserContext = React.createContext()
export const CourseContext = React.createContext()

const AppUseContext = () =>{
    return (
        <div>
            <UserContext.Provider value={'vincent'}>
                <CourseContext.Provider value={'BSIT'}>
                     <CompC/>
                </CourseContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default AppUseContext
