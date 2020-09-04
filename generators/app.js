// function* strGenerator() {
// 	yield 'H'
// 	yield 'e'
// 	yield 'l'
// 	yield 'l'
// 	yield 'o'
// }

// const str = strGenerator()

// function* numberGenerator(n = 10) {
// 	for(let i=0; i < n; i++) {
// 		yield i
// 	}
// }

// const num = numberGenerator(7)

// const iterator = {
// 	gen(n = 10) {
// 		let i = 0

// 		return {
// 			next() {
// 				if(i < n) {
// 					return {value: ++i, done: false}
// 				}
// 				return {value: undefined, done: true}
// 			}
// 		}
// 	}
// }
// const iterator = {
// 	[Symbol.iterator](n = 10) {
// 		let i = 0

// 		return {
// 			next() {
// 				if(i < n) {
// 					return {value: ++i, done: false}
// 				}
// 				return {value: undefined, done: true}
// 			}
// 		}
// 	}
// }

// for (let k of 'Hello') {
// 	console.log(k)
// }
// for (let k of [1, 1, 2, 3, 5, 8, 12]) {
// 	console.log(k)
// }

function* iter(n = 10) {
	for( let i = 0; i < n; i++) {
		yield i
	}
}

for (let k of iter(6)) {
	console.log(k)
}