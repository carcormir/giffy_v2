import { useReducer } from "react"

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword', 
    UPDATE_RATING: 'update_rating'
}

const REDUCER = (state, action) => {
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

export default function useForm ({
    initialKeyword="", 
    initialRating="g"
    } = {}) {
    const [state, dispach] = useReducer(REDUCER, {
        keyword: decodeURI(initialKeyword),
        rating: initialRating,
        times: 0
    })

    const {keyword, rating, times} = state

    return {
        keyword, 
        rating, 
        times,
        updateKeyword: keyword => 
        dispach({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
        updateRating: rating => 
        dispach({ type: ACTIONS.UPDATE_RATING, payload: rating}) 
    }
}