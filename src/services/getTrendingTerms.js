import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  return data
}

export default function getTendringTerms ( ) {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`
    return fetch(apiURL)
      .then(res => res.json()) //convert to json
      .then(fromApiResponseToGifs);
}