//Check if the number is Prime or not.

const number = Number(prompt("Enter number"));

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      // if number is divisible by any number between 2 to num-1 then it is not prime
      return false;
    }
  }
  return true; // if number is not divisible by any number between 2 to num-1 then it is prime
};

const result = isPrime(number);
console.log(result);

