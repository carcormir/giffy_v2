import React,  {useState , useEffect, useRef, useCallback} from 'react';
import { Link, useParams } from 'react-router-dom';
import ListOfGifs from '../../components/ListOfGifs';
import getGifs from '../../services/getGifs';
import {useGifs} from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen';
import debounce from 'lodash.debounce'
import {Helmet} from 'react-helmet'
import Spinner from 'components/Spinner';

function SearchResult () {
    const { keyword } = useParams()
    const { loading, gifs , setPage } = useGifs({keyword})
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ 
        externalRef: loading ? null : externalRef,
        once: false  
    })
    
    const title = gifs ? `${gifs.length} ${keyword} results` : ''
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])
 
    useEffect(function() {
        if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return <>
        {loading
            ? <Spinner></Spinner> //<h1>Loading ...</h1>
            : 
            <>  
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content=
                    {title}></meta>
                </Helmet>
                <h3>You are looking for ... {decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
                <div id="watcher" ref={externalRef}></div>
            </>
        }
    </>
}

export default React.memo(SearchResult)