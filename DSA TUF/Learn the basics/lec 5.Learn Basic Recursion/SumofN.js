// const SumofN = (N) => {
//   let sum = 0;
//   for (i = 1; i <= N; i++) {
//     sum += i;
//   }
//   return sum;
// };
// console.log(SumofN(5));
const SumofN = (i, N) => {
  if (i > N) return 0;

  return i + SumofN(i + 1, N);
};
console.log(SumofN(1, 5));

// const SumofN = (N) => (N * (N + 1)) / 2;

// console.log(SumofN(5)); // Output: 15
