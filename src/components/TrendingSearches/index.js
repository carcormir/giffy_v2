import React , { Suspense } from "react";
import useNearScreen from "../../hooks/useNearScreen";


const TrendingSearches = React.lazy( () => import("./TrendingSearches") )

// THIS PART ITS MOVED TO ITS OWN COMPONENT TO ONLY BE LOADED WHEN NEEDED
// EXAMPLE FOR REACT LOAD + SUSPENSE

// import React, { useEffect, useState, useRef } from "react";
// import getTrendingTerms from '../../services/getTrendingTerms'
// import Category from '../Category'

// function TrendingSearches () {
//     const [trends, setTrends] = useState([])

//     useEffect(function(){
//         getTrendingTerms().then(setTrends)
//     }, [])
    
//     return <Category name='Trends' options={trends} />
// }

export default function LazyTrending () {
    const {isNearScreen, fromRef} = useNearScreen({distance:'10px'})

    return <div ref={fromRef}>
        <Suspense fallback={'Still loading ...'}>
            { isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
}