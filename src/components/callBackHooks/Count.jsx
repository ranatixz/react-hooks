import React from 'react'

const Count = ({text}) =>{
    console.log('count component rendered')
    return (
        <div>
            {text}
        </div>
    )
}

export default React.memo(Count)
