import { useState , useCallback } from "react"
import { useNavigate } from "react-router" 

export default function SearchForm ( ) {

    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()

    const  handleSubmit = evt => {
        evt.preventDefault()
        // navigate to different route
        navigate(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value) 
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Search giff here...' onChange={handleChange} type='text' value={keyword}></input>
            <button>Search</button>
        </form>
    )
}