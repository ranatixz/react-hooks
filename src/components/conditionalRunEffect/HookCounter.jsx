import React, {useState, useEffect} from 'react'

const HookCounter = () =>{

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log('updating document title')
        document.title = `Clicked ${count} Times`
    }, [count])

    return (
        <div>
            <input 
                type='text' 
                value={name} 
                onChange={e => setName(e.target.value)}
            />
            <button 
                onClick={() => setCount(prevCount => prevCount + 1)}
            >Click button</button>
        </div>
    )
}

export default HookCounter
