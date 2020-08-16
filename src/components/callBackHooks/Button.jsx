import React from 'react'

const Button = ({handleClick, children}) =>{
    console.log(`button ${children} component rendered`)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
