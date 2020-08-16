import React,{useState, useEffect} from 'react'

const DocTitle = () =>{

    const [count, setCount] = useState(0)

    useEffect(() =>{
        document.title = `Count - ${count}`
    }, [count])
    
    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    )
}

export default DocTitle
