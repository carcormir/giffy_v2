import React from "react";
import { Link } from "react-router-dom";
// import {
//   CategoryTitle,
//   CategoryListItem,
//   CategoryLink,
//   CategoryList,
// } from "./styles";
// import "./Category.css";

export default function Category({ name, options = [] }) {
  return (
    <section>
      <h1>{name}</h1>
      
        <ul>
            {options.map((singleOption, index) => (
                <li key={singleOption}> 
                    <Link to={`/search/${singleOption}`}>
                    {singleOption}
                    </Link>
                </li>
            ))}
        </ul>
    </section>
  );
}