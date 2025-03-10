// // Print all Divisors of a given Number

// Step 1:Initialise an array to store the divisors.

// Step 2:Iterate from 1 to n using a loop variable ‘i’. For each value of ‘i’:

// Check if ‘i’ is a divisor of ‘n’ by checking if ‘n’ is divisible by ‘i’ without a remainder (‘n’%i == 0).
// If i is a divisor, store it in the array of divisors and increment the count of divisors.
// Step 3:After the loop, return the array of divisors.

// 1)Optimal Approach
function findDivisors(n) {
  // Initialize an empty
  // array to store the divisors
  let divisors = [];

  // Iterate up to the square
  // root of n to find divisors
  // Calculate the square root of n
  let sqrtN = Math.sqrt(n);

  //Clear understanding of uncomment below console

  //   console.log("Sqaure root of number:" + sqrtN);
  //   console.log("Number:", n);
  //   console.log("----------------------");
  //   console.log("|  Iteration  |  i  |  n/i  |  Divisors so far  |");
  //   console.log("----------------------");

  // Loop from 1 to the
  // square root of n
  for (let i = 1; i <= sqrtN; ++i) {
    // Check if i divides n

    // without leaving a remainder
    if (n % i === 0) {
      // Add divisor i to the array
      divisors.push(i);
      let pair = n / i;
      // Add the counterpart divisor
      // if it's different from i

      console.log(`|    ${i}      |   ${pair}   |`);

      if (i !== pair) {
        // condition usage  : square will add one time only so we need this condition avoid second Time
        // Add the counterpart
        // divisor to the array
        divisors.push(n / i);
      }
    }
  }

  // Return the array of divisors
  console.log("Time Complexity: O(sqr(n))");
  return divisors;
}
//Brute Force Approach in JavaScript

//
function printDivisors(n) {
  // Create an empty array to store divisors
  let divisors = [];

  // Iterate from 1 to n using a while loop
  let i = 1;
  while (i <= n) {
    if (n % i === 0) {
      // Add the divisor to the array
      divisors.push(i);
    }
    i++;
  }
  console.log("Time Complexity: O(n))");
  // Return the array of divisors
  return divisors;
}

function main() {
  let number = 89876; //54,12,89876

  let divisorsoptimalApporach = findDivisors(number);
  console.log("Optimal Approach");
  console.log("Divisors of " + number + " are: " + divisorsoptimalApporach);

  let divisorBruteForceApproach = printDivisors(number);
  console.log("Brute Force Approach ");
  console.log("Divisors of " + number + " are: " + divisorBruteForceApproach);

  //   console.log();
}

main();
