import React,{useReducer} from 'react'
import CompA from './CompA'

export const CounterContext = React.createContext()
const initialState = 0
const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
const  AppUseReducerWithUseContext = () =>{
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{count}</h1>
            <CounterContext.Provider value={{countState: count, countDispatch: dispatch}}>
                <CompA/>
            </CounterContext.Provider>
        </div>
    )
}

export default AppUseReducerWithUseContext
