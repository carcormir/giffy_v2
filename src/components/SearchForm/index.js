import { useState, useCallback, useReducer } from "react";
import { useNavigate } from "react-router";

const RATINGS = ["g", "pg", "pg-13", "r"];
const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword', 
  UPDATE_RATING: 'update_rating'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1
      }
    case ACTIONS.RATINGS:
      return {
        ...state,
        rating: action.payload
      }
    default:
      return state
  }
}

export default function SearchForm({
  initialKeyword  = '', 
  initialRating = RATINGS[0]
}) {
  
  const navigate = useNavigate();

  //const [rating, setRating] = useState(initialRating);

  const [state, dispach] = useReducer(reducer, {
    keyword: decodeURI(initialKeyword),
    rating: initialRating,
    times: 0
  })

  const {keyword, rating, times} = state // recover the state that is in the reducer

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // navigate to different route
    navigate(`/search/${keyword}/${rating}`);
  };

  const handleChange = (evt) => {
    dispach({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value }) // receives the keyword
  };

  const handleChangeRating = (evt) => {
    dispach({ type: ACTIONS.UPDATE_RATING, payload: evt.target.value })
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
      <small>{times}</small>
    </form>
  );
}
