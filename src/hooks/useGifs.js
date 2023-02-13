import { useState , useEffect , useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE_VALUE = 0

export function useGifs ({keyword, rating} = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE_VALUE)
    const {gifs, setGifs} = useContext(GifsContext) //global state added to the context

    // const [gifs, setGifs] = useState([]) // local state
    
    const keywordToUse = keyword || localStorage.getItem('lastKeyWord') || 'random'

    useEffect(function () {
        setLoading(true)
        // get keyword from locastorage
        getGifs({ keyword: keywordToUse, rating})
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            // save keyword in local storage
            localStorage.setItem('lastKeyWord', keywordToUse) 
        })
    }, [keyword, keywordToUse, rating, setGifs])

    useEffect(function () {
        if (page === INITIAL_PAGE_VALUE) return

        setLoadingNextPage(true)
        getGifs({ keyword: keywordToUse , rating, page: page})
        .then(nextGifs => {
          setGifs(prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(false)
        })
    }, [keywordToUse, page, rating, setGifs])

    return {loading, loadingNextPage, gifs, setPage}
}