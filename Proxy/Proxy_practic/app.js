// Wrapper
const position = {
	x: 20,
	y: 10
}

const withDefaultValue = (target, defaultVlue = 0) => {
	return new Proxy(target, {
		get: (obj, prop) => prop in obj ? obj[prop] : defaultVlue
	})
}

const positionWithDefaultValue = withDefaultValue(position, 0)

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
	return new Proxy(target, {
		has: (obj, prop) => (prop in obj) && (!(prop.startsWith(prefix))),
		ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
		get: (obj, prop, reciver) => prop in reciver ? obj[prop] : void 0,
		set: (obj, prop, value, reciver) => prop in reciver ? obj[prop] = value : console.log(`${obj} hasn't property ${prop}`)
	})
}

const data = withHiddenProps({
	name: 'Konstantin',
	age: 48,
	_uid: '1234512345'
})

// Optimization
const userData = [
	{id: 1, name: 'Vladilen', job: 'Fullstack', age: 25},
	{id: 2, name: 'Elena', job: 'Student', age: 22},
	{id: 3, name: 'Victor', job: 'Backend', age: 23},
	{id: 4, name: 'Vasilisa', job: 'Teacher', age: 24}
]

const IndexedArray = new Proxy(Array, {
	construct(target, [args]) {
		const index = {}
		args.forEach(item => (index[item.id] = item))

		return new Proxy(target(...args), {
			get(arr, prop) {
				switch (prop) {
					case 'push':
						return item => {
							index[item.id] = item
							arr[prop].call(arr, item)
						}
					case 'findById':
						return id => index[id]
					default:
						return arr[prop]
				}
				
			}
		})
	}
})

const users = new IndexedArray(userData)