import { useState , useEffect } from "react";
import Gif from "../Gif";
import getGifs from "../../services/getGifs";
import React from 'react';
import './styles.css'


export default function ListOfGifs ( { gifs }) {
    return <div className="ListOfGifs">
      {
        gifs.map(({title, id, url}) => (
        <Gif 
          key={id}
          title={title} 
          url={url} 
          id={id}
        />
        ))
      }
    </div>
}