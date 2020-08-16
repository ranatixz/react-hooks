import React,{useContext} from 'react'
import { CounterContext } from './AppUseReducerWithUseContext'
const CompD = () =>{
    const counterContext = useContext(CounterContext)
    return (
        <div>
            <h1>Comp D</h1>
            <h5>{counterContext.countState}</h5>
            <button onClick={() => counterContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompD
