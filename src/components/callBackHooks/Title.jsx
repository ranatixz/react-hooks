import React from 'react'

const Title = () =>{
    console.log('title component rendered')
    return (
        <div>
            <h5>Callback Hook</h5>
        </div>
    )
}

export default React.memo(Title)
