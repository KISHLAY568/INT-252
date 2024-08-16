const calculateSum = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
const numbers = [1, 2, 3, 4, 5];
const sum = calculateSum(numbers);
console.log(sum);
