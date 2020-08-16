import React, {useState} from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'

const DocTitleTwo = () =>{

    const [count, setCount] = useState(0)
    useDocumentTitle(count)
    
    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    )
}

export default DocTitleTwo
