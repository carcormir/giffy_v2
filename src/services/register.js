const ENDPOINT = "http://localhost:8000/api";

export default function registerService({ username, password }) {
    return fetch(`${ENDPOINT}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password})
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT okay')
        return true
    })
}
