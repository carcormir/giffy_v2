import { Link , useLocation , useNavigate } from 'react-router-dom';
import { useState , useCallback } from 'react';
import { useGifs } from '../../hooks/useGifs';
import ListOfGifs from '../../components/ListOfGifs';
import TrendindSearches from '../../components/TrendingSearches';
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

            <h3 className="App-title">Last search</h3>
            <ListOfGifs gifs={gifs} />

            <h3 className="App-title">The most popular gifs</h3>
            <TrendindSearches/>
            
        </>
    )
}