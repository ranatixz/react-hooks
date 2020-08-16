import React, {useState} from 'react'

const HookCounter = () =>{
    const initialCount = 0
    const [count, setCount] = useState(0)
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement Count</button>
            <button onClick={() => setCount(prevCount => prevCount + 5)}>Increment 5 Count</button>
        </div>
    )
}

export default HookCounter
