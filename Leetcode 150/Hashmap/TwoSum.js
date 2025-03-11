// Best Approach?
// 👉 If the array is unsorted, use the HashMap method (O(n)).
// 👉 If the array is sorted, use the Two-Pointer method (O(n)).

// Approach 1:(O(n^2))
// Code (Brute Force)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
// Approach 2: Using HashMap (O(n))
// Code (Optimal Solution)
function twoSumHashMap(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSumHashMap([2, 7, 11, 15], 9));
// Approach 3: Two-Pointer Method (O(n))
function twoSumSorted(nums, target) {
  nums = nums.map((num, index) => ({ num, index })); // Store original indices
  nums.sort((a, b) => a.num - b.num); // Sort by value

  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let sum = nums[left].num + nums[right].num;

    if (sum === target) {
      return [nums[left].index, nums[right].index]; // Return original indices
    } else if (sum < target) {
      left++; // Need a larger sum
    } else {
      right--; // Need a smaller sum
    }
  }

  return [];
}

console.log(twoSumSorted([2, 7, 11, 15], 9));
