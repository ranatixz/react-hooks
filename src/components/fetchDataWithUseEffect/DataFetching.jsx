import React,{useState, useEffect} from 'react'
import axios from 'axios'
import DisplayData from './DisplayData'

const DataFetching = () =>{

    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setID] = useState('')
    const [browsePost, setBrowsePost] = useState(false)
    const [loading, setLoading] = useState(null)

    useEffect(()=>{
       getDataFromApi(false)
    },[])

    const getDataFromApi = async (onSearch) =>{
       const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response =>{
            if(onSearch){
                setPost(response.data)
                console.log(response.data)
            }else if(!onSearch){
                setPosts(response.data)
            }
        })
        .catch(err =>{
            console.log(err)
        })
        setLoading(true)
    }
    
    const inputChangeHandler = e =>{
        if(e.target.value === ''){
            setBrowsePost(false)
            setID(e.target.value)
        }else{
            setID(e.target.value)
        }
    }

    const onSubmitHandler = e =>{
        e.preventDefault()
        if(id !== ''){
            setBrowsePost(true)
            getDataFromApi(true)
        }
    }
    return (
        <div>
            <form 
                onSubmit={onSubmitHandler} 
                id='form-on-search'
                method='post'
            >
                <input 
                    type='text' 
                    value={id} 
                    onChange={inputChangeHandler}
                />
                <button type='submit'>Search Post</button>
            </form>
            {   
                loading ?
                    browsePost ? 
                        <DisplayData loading={loading} post={post}/> :
                        posts.map(post =>{
                        return(
                                <DisplayData
                                    key={post.id}
                                    post={post}
                                />
                            )
                        })
                 : <p>Loading...</p>
            }
        </div>
    )
}

export default DataFetching
