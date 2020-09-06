const requestURL = 'https://jsonplaceholder.typicode.com/users'

const headers = {
	'Content-Type': 'application/json'
}

function sendRequest(method, url, body = null) {
	return fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: headers
	}).then(response => {
		if (response.ok) {
			return response.json()
		}
		return response.json().then(error => {
			const e = new Error('Что-то пошло не так')
			e.data = error
			throw e
		})
	})
}

// sendRequest('GET', requestURL)
// 	.then( res => console.log(res))
// 	.catch( err => console.error(err))

const body = {
	name: 'Konstantin',
	age: 48
}

sendRequest('POST', requestURL, body)
	.then( res => console.log(res))
	.catch( err => console.error(err))