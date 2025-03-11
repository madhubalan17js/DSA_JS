// for itertion continue untill the condition to be false
function insertionSort(arr, n) {
  for (let i = 0; i <= n - 1; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      // Swap arr[j] and arr[j - 1]
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }

  console.log("After insertion sort:");
  console.log(arr.join(" "));
}

// Example usage
let arr = [5, 3, 8, 4, 2];
insertionSort(arr, arr.length);
