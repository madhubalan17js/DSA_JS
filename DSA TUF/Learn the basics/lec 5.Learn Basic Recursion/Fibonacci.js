// const fibonacciIterative = (n) => {
//   let fib = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }

//   return fib;
// };

// console.log(fibonacciIterative(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const fibonacciRecursive = (n) => {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

console.log(fibonacciRecursive(7)); // Output: 13 (7th Fibonacci number)
