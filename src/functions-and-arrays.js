// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
	return Math.max(num1, num2);
}

// Iteration 2 | Find the Longest Word
const words = [
	'mystery',
	'brother',
	'aviator',
	'crocodile',
	'pearl',
	'orchard',
	'crackpot',
];

function findLongestWord(words) {
	if (!words.length) return null;

	const wordLengths = words.map(word => word.length);
	const maxLength = Math.max(...wordLengths);

	return words.find(word => word.length === maxLength);
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
	return numbers.reduce((sum, num) => sum + num, 0);
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
	if (!numbers.length) return 0;
	return sumNumbers(numbers) / numbers.length;
}

// Iteration 5 | Find Elements
const words2 = [
	'machine',
	'subset',
	'trouble',
	'starting',
	'matter',
	'eating',
	'truth',
	'disobedience',
];

function doesWordExist(words, searchWord) {
	return !words.length ? null : words.some(word => word === searchWord);
}
