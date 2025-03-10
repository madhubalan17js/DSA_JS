// Algorithm
// Step 1:Initialise an integer revNum to 0. This variable will store the reversed number.

// Step 2: Using a while loop we iterate while n is greater than 0 and at each iteration:

// Calculate the last digit of the number using the modulus operator (N%10) and store it in a variable last digit.
// Update the reversed number by multiplying it with 10 and adding the last digit. This effectively appends the last digit to the end of the reversed number.
// Remove the last digit of the number by dividing it by 10.
// Step 3: After exiting the while loop, return the reversed number.

// 1) Optimal Approach
// Declare a variable 'n' to
// store the input integer.
// let n;
// Prompt the user to enter an
// integer and store it in 'n'.
let n = 987867;
// Initialize a variable 'revNum' to
// store the reverse of the input integer.
let revNum = 0;
// Start a while loop to reverse the
// digits of the input integer.
while (n > 0) {
  // Extract the last digit of
  // 'n' and store it in 'ld'.
  let ld = n % 10;
  // Multiply the current reverse number
  // by 10 and add the last digit.
  revNum = revNum * 10 + ld;
  // Remove the last digit from 'n'.
  n = Math.floor(n / 10);
}
// Print the reversed number.
console.log(revNum);

// Time Complexity: O(log10N + 1)
// Space Complexity: O(1)
