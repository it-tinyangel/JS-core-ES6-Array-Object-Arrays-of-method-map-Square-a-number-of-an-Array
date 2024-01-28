const arr = [5, 6, 7, 8, 9];

const squaresArray = arr.map(number => {
	return { original: number, square: number ** 2 };
});

console.log('The array and their squares:', squaresArray);