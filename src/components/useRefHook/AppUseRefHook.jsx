import React,{useState} from 'react'
import FocusInput from './FocusInput'
import ClassTimer from './ClassTimer'
import HookTimer from './HookTimer'

const AppUseRefHook = () =>{
    return (
        <div>
            {/* <FocusInput/> */}
            <ClassTimer/>
            <HookTimer/>
        </div>
    )
}

export default AppUseRefHook
