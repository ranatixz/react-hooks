import React from 'react'
import useCounter from '../../hooks/useCounter'
const CounterTwo = () =>{


    const [count, increment, decrement, reset] = useCounter(0, 1)

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Increment count</button>
            <button onClick={decrement}>Decrement count</button>
            <button onClick={reset}>Reset count</button>
        </div>
    )
}

export default CounterTwo
