// Brute Force Approach

function sortArr(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

const arr1 = [2, 5, 1, 3, 0];
const arr2 = [8, 10, 5, 7, 9];

console.log("The Largest element in the array is: " + sortArr(arr1));
console.log("The Largest element in the array is: " + sortArr(arr2));

// Time Complexity: O(N*log(N))
// Space Complexity: O(n)

// Optimal  Approach

function FindLargestSmallestElementInArray(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return [max, min];
}

const arr3 = [2, 5, 1, 3, 0];
let max = FindLargestSmallestElementInArray(arr3);
console.log("The largest element in the array is: " + max);

const arr4 = [8, 10, 5, 7, 9];
max = FindLargestSmallestElementInArray(arr4);
console.log("The largest element in the array is: " + max);

// Time Complexity: O(N)
// Space Complexity: O(1)
