const person = Object.create({
	birthday: () => {console.log(person.yearBirthday)}
},{
	name: {
		value: 'Konstantin',
		enumerable: true,
		configurable: true,
		writable: true
	},
	yearBirthday: {
		value: 1972,
		enumerable: false,
		configurable: false,
		writable: false
	},
	age: {
		get() {
			return new Date().getFullYear() - this.yearBirthday
		},
		set(value) {
			console.log(value);
			document.body.style.backgroundColor = 'red'
		}
	}
})
	
person.name = 'Maxim'

console.log(person);
console.log(person.birthday());


for(let key in person) {
	if (Object.hasOwnProperty(key)) {
		console.log('Key :', key, person[key]);
	}
}
