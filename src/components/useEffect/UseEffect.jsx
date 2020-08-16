import React, {useState, useEffect} from 'react'


const UseEffect = () =>{

    const initialCount = 0
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = count === 0 ? 'React App' : `Click ${count} times`
    })
    

    return (
        <React.Fragment>
            <div>
                <h3>Count: {count}</h3>
            </div>
            <div>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
            </div>
            <div>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement Count</button>
            </div>
            <div>
                <button onClick={() => setCount(initialCount)}>Reset Count</button>
            </div>
        </React.Fragment>
    )
}

export default UseEffect
