import React from 'react'
import Counter from './Counter'
import CounterB from './CounterB'
import MyReducer from './MyReducer'
import MyReducerWithAnArrOfObj from './ReducerWithAnArrOfObj'
import MultipleReducer from './MultipleReducer'
const AppUseReducer = () =>{
    return (
        <div>
            {/* <Counter/> */}
            {/* <CounterB/> */}
            {/* <MyReducer/> */}
            {/* <MyReducerWithAnArrOfObj/> */}
            <MultipleReducer/>
        </div>
    )
}

export default AppUseReducer
