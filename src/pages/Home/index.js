import { Link , useLocation , useNavigate } from 'react-router-dom';
import { useState , useCallback } from 'react';
import { useGifs } from '../../hooks/useGifs';
import ListOfGifs from '../../components/ListOfGifs';
import TrendindSearches from '../../components/TrendingSearches';
import SearchForm from 'components/SearchForm';
import {Helmet} from 'react-helmet'

const POPULAR_GIFS = ["Emo music", "Banana", "Apple"]
export default function Home () {
    const { loading, gifs } = useGifs()

    // const handleSubmit = ({keyword}) => {
    //     // navigate to different route
    //     navigate(`/search/${keyword}`)
    // }
    
    return (
        <>
            <Helmet>
                <title>Home || Giffy</title>
            </Helmet>
            
            <header>
                <SearchForm />
            </header>

            <h3 className="App-title">Last search</h3>
            <ListOfGifs gifs={gifs} />

            <h3 className="App-title">The most popular gifs</h3>
            <TrendindSearches/>
            
            {/* <ul>
                {
                    POPULAR_GIFS.map((popularGif) => (
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`}>
                            {popularGif} gifs
                            </Link>
                        </li>
                        )
                    )
                }
            </ul> */}
        </>
    )
}