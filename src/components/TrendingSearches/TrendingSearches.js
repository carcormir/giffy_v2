import React, { useEffect, useState } from "react";
import getTrendingTerms from '../../services/getTrendingTerms'
import Category from '../Category'

export default function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    }, [])
    
    // THIS IS THE EXTENDED VERSION OF THE LINES ABOVE
    // useEffect(function(){
    //     getTrendingTerms().then(nextTrends => {
    //         setTrends(prevTrends => prevTrends.concat(nextTrends))})
    // }, [])

    return <Category name='Trends' options={trends} />
}