const ENDPOINT = "http://localhost:8000/api";

export default function loginService({ username, password }) {
    return fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password})
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT okay')
        return res.json()
    }).then(res => {
        const { token } = res
        return token
    })
}
