// class Animal {
// 	constructor(options) {
// 		this.name = options.name,
// 		this.age = options.age,
// 		this.hasTail = options.hasTail
// 	}

// 	voice(){
// 		console.log('I am Animal!');
// 	}
// }

// const animal = new Animal({
// 	name: 'Animal',
// 	age: 7,
// 	hasTail: true
// })

// console.log(animal);

// class Cat extends Animal {
// 	static type = 'CAT'

// 	constructor(options) {
// 		super(options),
// 		this.color = options.color
// 	}

// 	voice(){
// 		super.voice()
// 		console.log('I am a Cat!');
// 	}

// 	get ageInfo() {
// 		return this.age*7
// 	}

// 	set ageInfo(age){
// 		this.age = age
// 	}
// }

// const cat = new Cat({
// 	name: 'Cat',
// 	age: 7,
// 	hasTail: true,
// 	color: 'Black'
// })

// console.log(cat);

class Component {
	constructor(selector) {
		this.$el = document.querySelector(selector)
	}

	hide() {
		this.$el.style.display = 'none'
	}
	show() {
		this.$el.style.display = 'block'
	}
}

class Box extends Component {
	constructor(options) {
		super(options.selector)
		this.$el.style.width = this.$el.style.height = options.size + 'px'
		this.$el.style.background = options.color
		this.$el.style.margin = options.margin + 'px'
	}
}

const box1 = new Box ({
	selector: '#box1',
	size: 50,
	color: 'blue',
	margin: 10
})
const box2 = new Box ({
	selector: '#box2',
	size: 70,
	color: 'green',
	margin: 10
})

class Circle extends Box {
	constructor(options) {
		super(options)
		this.$el.style.borderRadius = '50%'
	}
}

const circle1 = new Circle ({
	selector: '#circle1',
	size: 100,
	color: 'yellow',
	margin: 10
})