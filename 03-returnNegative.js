// function makeNegative(num) {
//   // Code?
//   // return num < 0 ? num : -num
//   // return -Math.abs(num)
//   return num <= 0 ? num : -num
// }

const makeNegative = (num) => num <= 0 ? num : -num;

console.log(makeNegative(4))