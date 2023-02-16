const ENDPOINT = "http://localhost:8000/api";

export default function addFavService({ id, jwt }) {
    return fetch(`${ENDPOINT}/fav/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({jwt})
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT okay')
        return res.json()
    }).then(res => {
        const { favs } = res
        return favs
    })
}
