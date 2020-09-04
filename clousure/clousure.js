// Замыкание это просто функция, обернутая в другую функцию

// function createMultiplicator(num) {
// 	return function multTo() {
// 		return num*1000	
// 	}
// }

// const multiplicator = createMultiplicator(42)
// console.log(multiplicator);
// console.log(multiplicator());

// function createIncrement(inkrement) {
// 	return function addToInkrement (num) {
// 		return num + inkrement
// 	}
// }

// let addOne = createIncrement(1)

// console.log(addOne(40));
// console.log(addOne(1000));

// const addTen = createIncrement(10)

// console.log(addTen(40));
// console.log(addTen(1000));

// function createURL (host) {
// 	return function addHost (dom) {
// 		return `https://${dom}.${host}`
// 	}
// }

// let comURL = createURL('com')
// let ruURL = createURL('ru')

// console.log(comURL('google'));
// console.log(comURL('netflix'));
// console.log(ruURL('yandex'));
// console.log(ruURL('sberbank'));

const greet = function(name, age) {
	return `I am ${name} and I ${age} years old!`
}

const user1 = { name: 'Konstantin', age: 48}
const user2 = { name: 'Elena', age: 53}

function bind({name, age}, callback) {
	return callback(name, age)
}

greet1 = bind(user1, greet)
greet2 = bind(user2, greet)

console.log(greet1);
console.log(greet2);
