import React,{useState, useMemo} from 'react'

const Counter = () =>{

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () =>{
        setCounterOne(prevCount => prevCount + 1)
    }

    const incrementCounterTwo = () =>{
        setCounterTwo(prevCount => prevCount + 1)
    }


    const isEven = useMemo(()=>{
        let i = 0
        while(i < 200000000) i++
        return counterOne % 2 === 0
    },[counterOne])

    console.log('component rendered')
    return (
        <div>
            <div>Counter one: {counterOne}</div>
            {isEven ? 'even' : 'odd'}
            <div>Counter two: {counterTwo}</div>
            <div>
                <button onClick={incrementCounterOne}>Increment Counter one</button>
            </div>
            <div>
                <button onClick={incrementCounterTwo}>Increment Counter two</button>
            </div>
        </div>
    )
}

export default Counter
