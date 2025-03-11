// Optimal Approach
// Time Complexity: O(N), Single-pass solution
// Space Complexity: O(1)

function secondSmallest(arr) {
  if (arr.length < 2) return -1;

  let small = Infinity;
  let second_small = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      second_small = small;
      small = arr[i];
    } else if (arr[i] < second_small && arr[i] !== small) {
      second_small = arr[i];
    }
  }

  return second_small === Infinity ? 1 : second_small;
}

function secondLargest(arr) {
  if (arr.length < 2) return -1;

  let large = -Infinity;
  let second_large = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      second_large = large;
      large = arr[i];
    } else if (arr[i] > second_large && arr[i] !== large) {
      second_large = arr[i];
    }
  }

  return second_large === -Infinity ? -1 : second_large;
}

const arr = [1, 2, 4, 7, 7, 5];
const sS = secondSmallest(arr);
const sL = secondLargest(arr);

console.log("Second smallest is " + sS);
console.log("Second largest is " + sL);

// Better Approach
// Time Complexity: O(N), We do two linear traversals in our array
// Space Complexity: O(1)
function getElements(arr) {
  if (arr.length === 0 || arr.length === 1) {
    console.log(-1 + " " + -1); // Edge case when only one element is present in the array
    return;
  }

  let small = Infinity;
  let second_small = Infinity;
  let large = -Infinity;
  let second_large = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    small = Math.min(small, arr[i]);
    large = Math.max(large, arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < second_small && arr[i] !== small) second_small = arr[i];
    if (arr[i] > second_large && arr[i] !== large) second_large = arr[i];
  }

  console.log(
    "Second smallest is " + second_small === Infinity ? 1 : second_small
  );
  console.log(
    "Second largest is " + second_large === -Infinity ? -1 : second_large
  );
}

const arr1 = [1, 2, 4, 6, 7, 5];
getElements(arr);

//Brute Force Approach - Ony Work on Without Dupliccate array
// Time Complexity: O(NlogN), For sorting the array
// Space Complexity: O(1)
function getElementsBF(arr) {
  if (arr.length === 0 || arr.length === 1) {
    console.log(-1 + " " + -1); // Edge case when only one element is present in the array
    return;
  }

  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => a - b);
  let small = uniqueArr[1];
  let secLarge = uniqueArr[uniqueArr.length - 2];
  console.log("Second smallest is " + small);
  console.log("Second largest is " + secLarge);
}

const arr3 = [1, 2, 4, 6, 7, 5];
getElementsBF(arr);
