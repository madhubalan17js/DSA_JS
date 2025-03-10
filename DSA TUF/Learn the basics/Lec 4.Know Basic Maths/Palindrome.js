// Algorithm
// Step 1:Initialise an integer revNum to 0. This variable will store the reverse of the number.

// Step 2: Make a duplicate of the original number and store it in an integer dup for later comparison.

// Step 3: Run a while loop with the condition n>0 to reverse the number and at each iteration:

// Get the last digit of n by using the modulus operator % with 10 and store it in a temporary variable ld.
// Update the revNum by multiplying it by 10 and adding the last digit ld.
// Update n by integer division with 10 effectively removing the last digit.
// Step 4: After the loop, check if the original number dup is equal to the reversed number revNum.

// If they are equal, return true indicating the number is a palindrome.
// If they are not equal, return false indicating that the number is not a palindrome.

// 1)Optimal Approach

// Function to check if a
// given integer is a palindrome
function palindrome(n) {
  // Initialize a variable to
  // store the reverse of the number
  let revNum = 0;
  // Create a duplicate variable to
  // store the original number
  let dup = n;
  // Iterate through each digit of
  // the number until it becomes 0
  while (n > 0) {
    // Extract the last
    // digit of the number
    let ld = n % 10;
    // Build the reverse number
    // by appending the last digit
    revNum = revNum * 10 + ld;
    // Remove the last digit
    // from the original number
    n = Math.floor(n / 10);
  }
  // Check if the original number
  // is equal to its reverse
  if (dup == revNum) {
    // If equal, return true
    // indicating it's a palindrome
    return true;
  } else {
    // If not equal, return false
    // indicating it's not a palindrome
    return false;
  }
}

// Main function
function main() {
  let number = 4554;

  if (palindrome(number)) {
    console.log(number + " is a palindrome.");
  } else {
    console.log(number + " is not a palindrome.");
  }
}

// Calling the main function
main();

// Time Complexity: O(log10N + 1)
// Space Complexity: O(1)
