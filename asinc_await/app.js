const delay = (ms) => {
	return new Promise( r => setTimeout(() => r(),ms))
}

delay(2000).then(() => console.log('2 seconds'))

const url = 'https://jsonplaceholder.typicode.com/todos'

function fetchTodos () {
	console.log('Fetch todo started...');
	
	delay(2000)
		.then(() => {
			return fetch(url)
	})
	.then(response => response.json())
}

fetchTodos()
	.then(data => {
		console.log('Data', data)
	})
	.catch(e => console.error(e))