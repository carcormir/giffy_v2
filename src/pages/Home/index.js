import { Link , useLocation , useNavigate } from 'react-router-dom';
import { useState , useCallback } from 'react';
import { useGifs } from '../../hooks/useGifs';
import ListOfGifs from '../../components/ListOfGifs';
import TrendingSearches from '../../components/TrendingSearches';
import SearchForm from 'components/SearchForm';
import {Helmet} from 'react-helmet'

export default function Home () {
    const { gifs } = useGifs()
    
    return (
        <>
            <Helmet>
                <title>Home || Giffy</title>
            </Helmet>
            
            <header>
                <SearchForm />
            </header>

            <span className="App-title">Last search</span>
            <ListOfGifs gifs={gifs} />

            <span className="App-title">The most popular gifs</span>
            <TrendingSearches/>
            
        </>
    )
}