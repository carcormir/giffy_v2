import { useState } from "react"

export default function SearchForm ( {onSubmit } ) {

    const [keyword, setKeyword] = useState('')

    const  handleSubmit = evt => {
        evt.preventDefault()
        // navigate to different route
        onSubmit({keyword})
        
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