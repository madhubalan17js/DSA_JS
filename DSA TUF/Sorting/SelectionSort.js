// Finds the smallest element in the array and places it at the beginning.
// Repeats for the next smallest, then the next, until sorted.
// Does fewer swaps than Bubble Sort but still takes O(n²) time.
const SelectionSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    console.log(i);
    let mini = i;
    for (j = i; j < n; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }
    if (mini !== i) {
      // Optional: Avoid unnecessary swap if mini is already i
      let temp = arr[mini];
      arr[mini] = arr[i];
      arr[i] = temp;
      // swap without third variable
      // [arr[i], (arr[mini] = arr[mini]), arr[i]];
    }
  }
  return arr;
};
console.log(SelectionSort([3, 1, 2]));
