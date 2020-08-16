import {useEffect, useState, useRef} from 'react'

const useTimer = (initialCount = 0, runTimer = false) =>{
    
    const [timer, setTimer] = useState(initialCount)
    const interval = useRef()

    useEffect(()=>{
        if(runTimer){
            interval.current = setInterval(()=>{
                setTimer(prevTimer => prevTimer + 1)
            }, 1000)
        }else{
            clearInterval(interval.current)
        }
        return ()=> clearInterval(interval.current)
    }, [runTimer])

    return timer
}

export default useTimer
