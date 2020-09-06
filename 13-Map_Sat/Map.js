// const obj = {
// 	name: 'Konstanin',
// 	age: 48,
// 	job: 'Optik'
// }

// let entries = [
// 	['namme', 'Konstantin'],
// 	['age', 48],
// 	['job', 'Optik']
// ]

// const entries = Object.entries(obj)
// const obj = Object.fromentries(entries)

// console.log(obj);
// console.log(entries);

// const map = new Map(entries)

// console.log(map.get('job')); 
// map
// 	.set('adress', 'Tomsk')
// 	.set({hair: 'black', eyes: 'green'}, 'interface')
// 	.set(NaN, 'NaN field')

// map.delete('age')
// console.log(map.has('age'));
// map.clear()
// console.log(map);

// for(let key of map.keys()) {
// 	console.log(key)
// }
// for(let value of map.values()) {
// 	console.log(value)
// }
// map.forEach((key, value, m) => {
// 	console.log(key, value);
// })

const users = [
	{name: 'Elena'},
	{name: 'Sergei'},
	{name: 'Irina'}
]

const visits = new Map()

function lastVisit(user) {
	visits.set(user, new Date())
}

lastVisit(users[0])
lastVisit(users[1])

console.log(visits);