import Button from "components/Button";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import useForm from "./hook";
import "./index.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

export default function SearchForm({
  initialKeyword  = '', 
  initialRating = RATINGS[0]
}) {
  
  const navigate = useNavigate();

  //const [rating, setRating] = useState(initialRating);

  const {keyword, rating, times, updateKeyword, updateRating} = useForm({initialKeyword, initialRating}) // recover the state that is in the useForm hook

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // navigate to different route
    navigate(`/search/${keyword}/${rating}`);
  };

  const handleChange = (evt) => {
    updateKeyword(evt.target.value)
  };

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="input-search"
        placeholder="Search giff here..."
        onChange={handleChange}
        type="text"
        value={keyword}
        ></input>
      <select className="select-rate" onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
          ))}
      </select>
      <Button>Search</Button>
      {/* <small>{times}</small> */}
    </form>
  );
}
