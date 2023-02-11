import { useState, useCallback } from "react";
import { useNavigate } from "react-router";

const RATINGS = ["g", "pg", "pg-13", "r"];

export default function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const [rating, setRating] = useState(RATINGS[0]);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // navigate to different route
    navigate(`/search/${keyword}/${rating}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    setRating(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search giff here..."
        onChange={handleChange}
        type="text"
        value={keyword}
      ></input>
      <button>Search</button>
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Raiting type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  );
}
