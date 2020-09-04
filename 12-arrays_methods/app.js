const people = [
	{name: 'Konstantin', age: 48, budget: 30000},
	{name: 'Elena', age: 54, budget: 40000},
	{name: 'Vladilen', age: 26, budget: 63000},
	{name: 'Ivan', age: 13, budget: 15000},
	{name: 'Arsenij', age: 15, budget: 5000},
	{name: 'Vasilisa', age: 25, budget: 16000}
]

// for(let i=0; i < people.length; i++) {
// 	console.log(people[i])
// }
// for(person of people) {
// 	console.log(person)
// }

// ForEach

// people.forEach( person => console.log(person))

// Map

// const infoList = people.map( function(person) {
// 	return `${person.name} has budget ${person.budget}`
// })

// console.log(infoList.join(';\n'), ';');


//Filter
// const newPeople = []
// for( let i = 0; i < people.length; i++) {
// 	if(people[i].age > 18) {
// 		newPeople.push(people[i])
// 	}
// }

// const newPeople = people.filter(person => person.age > 18)
// console.log(newPeople)

//Reduce

// let amount = 0

// for(let i = 0; i < people.length; i++) {
// 	amount += people[i].budget
// }

// const amount = people.reduce((sum, person) => sum + person.budget, 0)

// console.log(amount)

//Find

// const ivan = people.find(person => person.name === 'Ivan')

// console.log(ivan)

//FindIndex

// const indexOfVasilisa = people.findIndex(person => person.name === 'Vasilisa')

// console.log(indexOfVasilisa)


const newPeople = people
	.map(person => {
		return {
			info: `${person.name} is ${person.age} old`,
			budget: person.budget
		}
	})
	.filter(person => person.budget > 20000)
	.reduce((sum, person) => sum + person.budget, 0)

	console.log(newPeople);