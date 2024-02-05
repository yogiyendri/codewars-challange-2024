// function simpleMultiplication(number) {
//   //  Write your code here.
//   if (number % 2 === 0) {
//     return number * 8
//   } else {
//     return number * 9
//   }
// }

const simpleMultiplication = (number) => number % 2 === 0 ? number * 8 : number * 9

console.log(simpleMultiplication(1))