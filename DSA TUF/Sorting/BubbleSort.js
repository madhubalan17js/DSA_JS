// Compares two adjacent elements and swaps them if they are in the wrong order.
// The largest element moves to the end in each pass (just like bubbles rising to the top in water).
// It keeps repeating until the entire array is sorted.
const BubbleSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false; // Track if a swap happens

    for (j = 0; j < n - 1 - i; j++) {
      //n-1-i= 4-1-0=(3) //4-1-1=(2) //4-1-2=1 //

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
        // swap without third variable
        // [arr[j], (arr[j+1] = arr[j+1]), arr[j]];
      }
    }
    if (!swapped) break;
  }
  return arr;
};

console.log(BubbleSort([64, 34, 25, 12]));
