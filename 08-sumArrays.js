// Sum Numbers
function sum (numbers) {
  // Good luck!
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
  
};

console.log(sum([1, 5.2, 4, 0, -1]))