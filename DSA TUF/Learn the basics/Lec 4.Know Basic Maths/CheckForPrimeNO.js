function isPrime(N) {
  if (N < 2) return false; // 0 and 1 are NOT prime numbers
  for (let i = 2; i * i <= N; i++) {
    if (N % i === 0) {
      return false; // Found a divisor, not prime
    }
  }
  return true; // Prime if no divisors found
}

let i = 2;
let Prime = [];
let NonPrime = [];

while (i < 100) {
  if (isPrime(i)) {
    Prime.push(i);
  } else {
    NonPrime.push(i);
  }
  i++;
}

console.log("✅ Prime Numbers:", Prime);
console.log("❌ Non-Prime Numbers:", NonPrime);
