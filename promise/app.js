// console.log('Preparing data...');
// const response = {
// 	title: 'response',
// 	port: 5000,
// 	status: 'preparing'
// }
// setTimeout(() => {
// 	console.log('Data request >>>')
// 	setTimeout(() => {
// 		console.log('Server data', response);
		
// 	},2000)
// },2000)

const p = new Promise((resolve, reject) => {
	console.log('Preparing data...');
	setTimeout(() => {
		console.log('Data request>>');
		resolve({
				title: 'response',
				port: 5000,
				status: 'preparing'
			})
		reject(new Error("Ошибка!"))
		},2000)
}).then(
	(response) => {
		console.log('From server >>>');
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(response)
			},3000)
		}
	)
}).then((data) => {
	console.log(data);
	},
	(error) => {
	console.log(error)
})	
