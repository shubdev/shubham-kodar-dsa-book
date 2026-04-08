
//Write a program to take two inputs a, b & find the value of a raised to the power of b. (Ex - a = 2, b = 5, OP - 2^5 = 32)

const a = Number(prompt("Enter a"));
const b = Number(prompt("Enter b"));

const power = (a, b) => {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const result = power(a, b);
console.log(result);





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
