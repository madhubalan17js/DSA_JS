// Algorithm:
// Step 1: Initialise a variable gcd to 1. This variable will store the greatest common divisor of the input numbers n1 and n2.

// Step 2: Iterate from 1 to the minimum of n1 and n2.

// We start from 1 because the GCD of any two numbers is at least 1, and it cannot be greater than the smaller of the two numbers.
// Step 3: At each iteration, if i is a common factor of both n1 and n2 update the gcd variable to i. We keep updating gcd as long as we find common factors.

// Step 4: After the iteration, the gcd variable will store the greatest common divisor of n1 and n2. Return this value as the output of the function.

// 1)Brute Force Approach
function findGcd(n1, n2) {
  // Initialize gcd to 1
  let gcd = 1;

  // Iterate from 1 up to
  // the minimum of n1 and n2
  for (let i = 1; i <= Math.min(n1, n2); i++) {
    // Check if i is a common
    // factor of both n1 and n2
    if (n1 % i === 0 && n2 % i === 0) {
      // Update gcd to the
      // current common factor i
      gcd = i;
    }
  }

  // Return the greatest
  // common divisor (gcd)
  return gcd;
}

// Main function
function main() {
  let n1 = 20,
    n2 = 15;

  // Find the GCD of n1 and n2
  let gcd = findGcd(n1, n2);

  console.log("GCD of " + n1 + " and " + n2 + " is: " + gcd);
}

// Call the main function
main();

// Time Complexity: O(min(N1, N2))
// Space Complexity: O(1)

//3) Optimal Approach

function findGcd(a, b) {
  // Continue loop as long as both
  // a and b are greater than 0
  while (a > 0 && b > 0) {
    // If a is greater than b,
    // subtract b from a and update a
    if (a > b) {
      // Update a to the remainder
      // of a divided by b
      a = a % b;
    }
    // If b is greater than or equal
    // to a, subtract a from b and update b
    else {
      // Update b to the remainder
      // of b divided by a
      b = b % a;
    }
  }
  // Check if a becomes 0,
  // if so, return b as the GCD
  if (a === 0) {
    return b;
  }
  // If a is not 0,
  // return a as the GCD
  return a;
}

// Set the values of n1 and n2
let n1 = 20,
  n2 = 15;

// Find the GCD of n1 and n2
let gcd = findGcd(n1, n2);

// Output the result
console.log("GCD of", n1, "and", n2, "is:", gcd);
