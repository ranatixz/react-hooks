import React,{useState} from 'react'

const Counter = () =>{
    
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment count</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement count</button>
            <button onClick={() => setCount(0)}>Reset count</button>
        </div>
    )
}

export default Counter
