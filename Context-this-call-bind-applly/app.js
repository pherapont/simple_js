function hello() {
	console.log('Hello', this)
}

const person = {
	name: 'Konstantin',
	age: 48,
	sayHello: hello,
	sayHelloWindow: hello.bind(document),
	logInfo: function(job, phone) {
		console.group(`${this.name} info:`)
		console.log(`Name is ${this.name}`)
		console.log(`Age is ${this.age}`)
		console.log(`Job is ${job}`)
		console.log(`Phone is ${phone}`)
		console.groupEnd()
	}
}

const lena = {
	name: 'Elena',
	age: 54
}

// person.logInfo.bind(lena, 'Frontend', '8-000-333-34-98')()
// person.logInfo.call(lena, 'Frontend', '8-000-333-34-98')
person.logInfo.apply(lena, ['Frontend', '8-000-333-34-98'])

/// ==========================================

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
// 	return arr.map(function(item) {
// 		return item * n
// 	})
// }

Array.prototype.multBy = function(n) {
	return this.map(function(item) {
		return item * n
	})
}

console.log(array.multBy(5))