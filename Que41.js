//An Automorphic number is a number whose square ends with the same number itself.
//Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)


function isAutomorphic(n) {
  let square = n * n;

  // convert to string
  let numStr = n.toString();
  let squareStr = square.toString();

  return squareStr.endsWith(numStr);
}

// Test
console.log(isAutomorphic(5));   // true
console.log(isAutomorphic(6));   // true
console.log(isAutomorphic(76));  // true
console.log(isAutomorphic(7));   // false