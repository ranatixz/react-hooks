import React,{useReducer, useEffect} from 'react'
import axios from 'axios';
import Post from './Post'

const initialState = {
    loading: true,
    error: '',
    posts: []
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading: false,
                posts: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return{
                loading: true,
                posts: [],
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}
const DataFetchingArrayOfObj = () =>{

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(response =>{
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: response.data
                })
            })
            .catch(error =>{
                dispatch({type: 'FETCH_ERROR'})
            })  
    },[])

    console.log(state)
    return (
        <div>
            {   
                state.loading ? 'Loading...' :
                state.posts.map(post =>{
                    return <Post key={post.id} post={post}/>
                })
            }
            {
                state.error && state.error
            }
        </div>
    )
}

export default DataFetchingArrayOfObj
