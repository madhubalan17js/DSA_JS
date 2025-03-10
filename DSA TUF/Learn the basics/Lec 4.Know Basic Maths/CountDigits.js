// // 1)Brute Force Approach

// Algorithm:

// Step 1:Initialise a counter to store the number of digits.

// Step 2:While N is greater than 0, execute the following:

// Increment the counter by 1
// Update N by removing its last digit by performing a modulo 10 (%10) operation on it.
// Step 3:After exiting the while loop, we return the counter as the number of digits.

// Function to count the number
// of digits in an integer 'n'.
function countDigits(n) {
  // Initialize a counter variable
  // 'cnt' to store the count of digits.
  let cnt = 0;
  // While loop iterates until 'n'
  // becomes 0 (no more digits left).
  while (n > 0) {
    // Increment the counter
    // for each digit encountered.
    cnt = cnt + 1;
    // Divide 'n' by 10 to
    // remove the last digit.
    n = Math.floor(n / 10);
  }
  // Return the
  // count of digits.
  return cnt;
}

// Main function
function main() {
  let N = 329823;
  console.log("N: " + N);
  let digits = countDigits(N);
  console.log("Number of Digits in N: " + digits);
}

// Execute the main function
main();
// Time Complexity: O(log10N + 1)
// Space Complexity : O(1)

// 2) Optimal Approach
// Calculate the count of digits in 'n'
// using logarithmic operation log10(n) + 1.
function countDigits(n) {
  // Initialize a variable 'cnt' to
  // store the count of digits.
  let cnt = Math.floor(Math.log10(n) + 1);

  // The expression Math.floor(Math.log10(n) + 1)
  // calculates the number of digits in 'n'
  // and rounds it down to the nearest whole number.

  // Adding 1 to the result accounts
  // for the case when 'n' is a power of 10,
  // ensuring that the count is correct.

  // Return the count of digits in 'n'.
  return cnt;
}

let N = 329823;
console.log("N: " + N);
let digits = countDigits(N);
console.log("Number of Digits in N: " + digits);

// Time Complexity: O(1)
// Space Complexity : O(1)
