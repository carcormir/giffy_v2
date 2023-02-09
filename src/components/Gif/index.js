import './Gif.css'
import { Link } from 'react-router-dom';
import React from 'react';

function Gif ({title, id, url} = {}) {
    return (
        <div className='Gif'>
            <Link to={`/gif/${id}`} className='Gif-link'>
                <h4>{title}</h4>
                <img  alt={title} src={url} />
            </Link>
        </div>
    )
}

export default React.memo(Gif)