// const ProductofN = (N) => {
//   let product = 1;
//   for (i = N; 1 <= i; i--) {
//     product *= i;
//   }
//   return product;
// };
// console.log(ProductofN(5));
const ProductofN = (i, N) => {
  if (i > N) return 1;

  return i * ProductofN(i + 1, N);
};
console.log(ProductofN(1, 5));

// const factorial = (N) => (N === 0 ? 1 : N * factorial(N - 1));

// console.log(factorial(5)); // Output: 120
