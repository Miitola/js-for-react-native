//Declaring array of numbers
let numArray = [1, 2, 3, 4]

function processArray(array) {
	const newArray = array.map(number => {
		if (number % 2 === 0) { return Math.pow(number, 2) } else if (number % 2 === 1) { return Math.pow(number, 3) }
	})
	console.log(newArray)
	return newArray
}