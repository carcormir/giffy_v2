import { useState , useEffect } from "react";
import Gif from "../Gif";
import getGifs from "../../services/getGifs";

export default function ListOfGifs ( { params }) {
    const { keyword } = params
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(function () {
        setLoading(true)
        getGifs({keyword}).then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword]);

    if (loading) return <i>Loading ...</i>
    
    return (
        gifs.map(({title, id, url}) => (
        <Gif 
          key={id}
          title={title} 
          url={url} 
          id={id} 
        />
        ))
    )
}