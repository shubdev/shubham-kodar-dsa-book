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
