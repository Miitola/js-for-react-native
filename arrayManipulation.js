//Task 1
//Declaring array of numbers
let numArray = [1, 2, 3, 4]
//Array Manipulation function ehich doubles even number and tripples odd numbers
function processArray(array) {
	//Loops over the array to perform the power operation
	const newArray = array.map(number => {
		if (number % 2 === 0) { return Math.pow(number, 2) } else if (number % 2 === 1) { return Math.pow(number, 3) }
	})
	//Output tot the console
	console.log(newArray)
	//Returns New Array
	return newArray
}

//Run the function
const processedArray = processArray(numArray);

//Task 2
//Create fromatArrayStrings function
function formatArrayStrings(strings, nums) {
  const newNumMap = nums.map((num, i) => {
    if (num % 2 === 0) {
      const alterString = strings[i].toUpperCase();
      return alterString;
    } else if (num % 2 === 1) {
      const alterString = strings[i].toLowerCase();
      return alterString;
    }
  });
  console.log(newNumMap);
  return newNumMap;
}

formatArrayStrings(["test", "pink", "blue", "we"], processedArray);