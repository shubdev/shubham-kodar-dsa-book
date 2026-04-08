//Print the sum of all factors of a number (Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)

function sumOfFactors(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i; // Add the factor to the sum
    }
  }
  return sum;
}
sumOfFactors(50); // 43








