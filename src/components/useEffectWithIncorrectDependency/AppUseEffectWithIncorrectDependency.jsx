import React,{useState} from 'react'
import CounterInterval from './CounterInterval'
import ClassCounterInterval from './ClassCounterInterval'

const AppUseEffectWithIncorrectDependency = () =>{

    const [isUnMount, setIsUnMount] = useState(false)
    const isUnMountFunc = () => setIsUnMount(!isUnMount)

    return (
        <div>
            {!isUnMount && <ClassCounterInterval/>}
            {!isUnMount && <CounterInterval/>}
            <button onClick={isUnMountFunc}>{!isUnMount ? 'unmount' : 'mount'}</button>
        </div>
    )
}

export default AppUseEffectWithIncorrectDependency
