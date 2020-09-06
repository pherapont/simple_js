const requestURL = 'https://jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()

// 	xhr.open('GET', requestURL)

// 	xhr.responseType = 'json'

// 	xhr.onload = () => {
// 		if (xhr.status >= 400) {
// 			console.error(xhr.response)
// 		}
// 		console.log(xhr.response)
// 		}

	// xhr.onerror = () => {
	// 	console.log(xhr.response)
	// }

	// xhr.send()

function sendRequest(method, url, body = null) {
	return new Promise ((resolve, reject) => {
		const xhr = new XMLHttpRequest()

		xhr.open(method, url)

		xhr.responseType = 'json'
		xhr.setRequestHeader('Content-Type', 'application/json')

		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response)
			}
			resolve(xhr.response)
			}
		xhr.onerror = () => {
			reject(xhr.response)
		}

		xhr.send(JSON.stringify(body))
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