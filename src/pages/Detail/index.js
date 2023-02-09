import React, { useContext } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import StaticContext from '../../context/StaticContext';
import GifsContext from '../../context/GifsContext';
import Gif from '../../components/Gif';
import useSingleGif from 'hooks/useSingleGif';
import {Helmet} from 'react-helmet'

export default function Detail ( ) {
    const params = useParams()
    const {gif, isLoading, isError}  = useSingleGif({id: params.id})   /// using custom hook that has useContext
    const title = gif ? gif.title : ''
    
    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title>Loading...</title>
                </Helmet>
                <h1>Loading...</h1>
            </>
        )
    }
    if (isError) return <Navigate to="/404"/>
    if (!gif) return null
    return <>
        <Helmet>
            <title>{title} || Giffy</title>
        </Helmet>
        <Gif {...gif} />
    </>
    
}