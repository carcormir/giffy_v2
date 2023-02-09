import { Link , useLocation , useNavigate } from 'react-router-dom';
import { useState , useCallback } from 'react';
import { useGifs } from '../../hooks/useGifs';
import ListOfGifs from '../../components/ListOfGifs';
import TrendindSearches from '../../components/TrendingSearches';
import SearchForm from 'components/SearchForm';

export default function ErrorPage () {
    return (
        <>
            <h1>404 ERROR - please help</h1>
        </>
    )
}