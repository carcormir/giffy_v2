import "./Gif.css";
import { Link } from "react-router-dom";
import React from "react";
import Fav from "../Fav/index.js";

function Gif({ title, id, url } = {}) {
  return (
    <div className="Gif">
      <div className="Gif-buttons">
        <Fav id={id} />
      </div>
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img alt={title} src={url} />
      </Link>
    </div>
  );
}

export default React.memo(Gif);
