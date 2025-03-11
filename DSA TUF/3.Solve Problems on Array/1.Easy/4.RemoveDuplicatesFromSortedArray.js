// Code (Optimal Solution)
// Two-Pointer Method (TC:O(n);SP:O(1))
var removeDuplicates = function (nums) {
  let index = 1; // Tracks position of the next unique element
  // if arr is not sort use nums.sort((a,b)=>a-b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return nums.slice(0, index); // Return only the unique part of nums
};

let nums = [1, 1, 2, 2, 3, 4, 4, 5];
let result = removeDuplicates(nums);
console.log(result); // Output: [1, 2, 3, 4, 5]

// Code (Brute Force)
// Approach :(TC:O(n);SP:O(n))

var removeDuplicates = function (nums) {
  return [...new Set(nums)]; //if you need Length add (.length)
};

let result2 = removeDuplicates(nums);
console.log(result2); // Output: [1, 2, 3, 4, 5]

// Worst Pratice :(TC:O(n log n);SP:O(n))

// var removeDuplicates = function (nums) {
//     return nums.sort((a, b) => a - b).filter((num, index, arr) => index === 0 || num !== arr[index - 1]);
//   };
//   ❌ Time Complexity: O(n log n) (sorting is slow)
// ❌ Space Complexity: O(n) (creates a new array)
