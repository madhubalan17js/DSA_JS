const isPalindrome = (s) => {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    let l = s[left],
      r = s[right];

    if (!/[a-zA-Z0-9]/.test(l)) {
      left++;
    } else if (!/[a-zA-Z0-9]/.test(r)) {
      right--;
    } else if (l.toLowerCase() !== r.toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false

// const isPalindrome = (s) => {
//     const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//     return cleanStr === cleanStr.split("").reverse().join("");
//   };

//   console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
//   console.log(isPalindrome("race a car")); // Output: false
