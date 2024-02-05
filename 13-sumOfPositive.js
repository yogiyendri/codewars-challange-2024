// function positiveSum(arr) {
//   return arr.filter((x) => x > 0).reduce((a, b) => a + b, 0)
// }

const positiveSum = (arr) => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0)
console.log(positiveSum([]))