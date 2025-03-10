// // An Armstrong number, also known as a narcissistic number or plenary number, is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

// // Number of digits: 3, 153 = 13+53+33

// Algorithm
// Step 1:Calculate the number of digits in the input number and store it in k. Read more about this Approach here: Count Digits

// Step 2: Initialise a variable sum to 0. This variable will store the sum of each digit raised to the power of number of digits in number.

// Make a copy of the original number to store it in a temporary variable.
// Step 3: Run a while loop with the condition n>0 and at each iteration:

// Get the last digit of n by using the modulus operator % with 10 and store it in a temporary variable ld.
// Add the digit ld raised to the power of k of the sum.
// Update n by integer division with 10 effectively removing the last digit.
// Step 4: After the loop, check if the original input number is equal to the sum of the digits raised to the power of the number of digits in the number.

// If they are equal, return true indicating the number is an Armstrong number.
// If they are not equal, return false indicating that the number is not an Armstrong number.

// 1)Optimal Approach

// Function to check if a
// number is an Armstrong number
function isArmstrong(num) {
  // Calculate the number of
  // digits in the given number
  const k = String(num).length;
  // Initialize the sum of digits
  // raised to the power of k to 0
  let sum = 0;
  // Copy the value of the input
  // number to a temporary variable n
  let n = num;
  // Iterate through each
  // digit of the number
  while (n > 0) {
    // Extract the last
    // digit of the number
    const ld = n % 10;
    // Add the digit raised to
    // the power of k to the sum
    sum += Math.pow(ld, k);
    // Remove the last digit
    // from the number
    n = Math.floor(n / 10);
  }
  // Check if the sum of digits raised to
  // the power of k equals the original number
  return sum === num ? true : false;
}

// Main function to test isArmstrong function
function main() {
  const number = 153;
  if (isArmstrong(number)) {
    console.log(number + " is an Armstrong number.");
  } else {
    console.log(number + " is not an Armstrong number.");
  }
}

// Call the main function
main();
