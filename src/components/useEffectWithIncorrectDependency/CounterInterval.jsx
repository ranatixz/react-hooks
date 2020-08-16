import React,{useEffect, useState} from 'react'

const CounterInterval = () =>{

    const [count, setCounter] = useState(0)
    
    const tick = () =>{
        setCounter(prevCount => prevCount + 1)
    }

    useEffect(()=>{
       const interval = setInterval(tick, 1000)
       return ()=> clearInterval(interval)  
    }, [])
    
    console.log(count)
    return (
        <div>
            <h1>{count}</h1>
            <h1>Hello world</h1>
        </div>
    )
}

export default CounterInterval
