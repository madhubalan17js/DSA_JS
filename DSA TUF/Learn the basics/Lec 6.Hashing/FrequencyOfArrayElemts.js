const FrequencyOfArrayElemts = (arr) => {
  // let count = new Map();

  // for (let num of arr) {
  //   count.set(num, (count.get(num) || 0) + 1);
  // }

  let count = {};
  let n = arr.length;
  // Count occurrences of each element
  for (let i = 0; i < n; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;
  }
  console.log("Frequency Map:", count);

  let low = Infinity;
  let high = -Infinity;

  // Find element with highest and lowest frequency
  for (let key in count) {
    let numKey = Number(key); // Convert key to number for correct comparison

    if (count[numKey] > count[high] || high === -Infinity) {
      high = numKey;
    }

    if (count[numKey] < count[low] || low === Infinity) {
      low = numKey;
    }
  }

  console.log(`Highest Frequency: ${high} appears ${count[high]} times`);
  console.log(`Lowest Frequency: ${low} appears ${count[low]} times`);

  return count; // Return count of 10, default to 0 if not present
};

console.log(FrequencyOfArrayElemts([10, 9, 8, 7, 9, 10, 10, 8, 3, 5, 4]));
