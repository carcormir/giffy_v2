const ENDPOINT = "http://localhost:8000/api";

export default function getFavsService({ id, jwt }) {
    return fetch(`${ENDPOINT}/fav`, {
        method: 'GET',
        headers: {
            'Authorization': jwt,
            'Content-Type': 'application/json',
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT okay')
        return res.json()
    }).then(res => {
        const { favs } = res
        return favs
    })
}
