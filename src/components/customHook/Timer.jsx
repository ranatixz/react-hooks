import React, {useState, useEffect, useRef} from 'react'
import useTimer from '../../hooks/useTimer'

const Timer = () =>{

    const [runTimer, setRunTimer] = useState(false)
    const time = useTimer(0, runTimer)
    useEffect(()=>{
         
    }, [runTimer])

    return (
        <div>
            {time}
            <button onClick={()=>setRunTimer(!runTimer)}>
                {runTimer ? 'Stop timer' : 'Run timer'}
            </button>
        </div>
    )
}

export default Timer
