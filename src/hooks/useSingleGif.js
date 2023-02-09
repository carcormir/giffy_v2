import { useEffect, useState } from "react";
import getSingleGifs from "services/getSingleGif";
import { useGifs } from "./useGifs";

export default function useSingleGif({ id }) {
    const {gifs} = useGifs() //this comes from the context
    const gifFromCache = gifs.find(singleGif => singleGif.id === id)

    const [gif, setGif] = useState(gifFromCache)
    const [isLoading, setIsloading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(function() {
        if(!gif) {
            setIsloading(true)
            // call service by ID if we dont have the gif
            getSingleGifs({ id })
                .then(gif => {
                    setGif(gif)
                    setIsloading(false)
                    setIsError(false)
                }).catch(err => {
                    setIsloading(false)
                    setIsError(true)
                })
        }
    }, [gif, id])
     
    return {gif, isLoading, isError}
}