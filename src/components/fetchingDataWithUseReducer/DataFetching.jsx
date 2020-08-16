import React,{useReducer, useEffect} from 'react'
import axios from 'axios'

const inititalState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return{
                loading: true,
                error: 'Something went wrong!',
                post: {}
            }
        default:
            return state
    }
}
const DataFetching = () =>{

    const [state, dispatch] = useReducer(reducer, inititalState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>{
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: response.data
                })
            })
            .catch(error =>{
                dispatch({
                    type: 'FETCH_ERROR',      
                })
            })
    },[])

    console.log(state.post)
    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetching
