//Print the sum of all factors of a number (Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)

function sumOfFactors(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    // loop will run n times
    if (n % i === 0) {
      // if n is divisible by i then i is a factor of n
      sum += i;
    }
  }
  return sum;
}

// Example
console.log(sumOfFactors(50)); // 93
