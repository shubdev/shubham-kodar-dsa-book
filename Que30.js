//Print all the factors of a number

function printFactors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      // if n is divisible by i then i is a factor of n
      console.log(i);
    }
  }
}

// Example
printFactors(12); //1,2,3,4,6,12
