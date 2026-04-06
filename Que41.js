//An Automorphic number is a number whose square ends with the same number itself.
//Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)


function isAutomorphic(n) {
    let square = n * n;


    let numStr = n.toString();    // convert to string
    let squareStr = square.toString();

    return squareStr.endsWith(numStr);
}

console.log(isAutomorphic(5));   // true
console.log(isAutomorphic(6));   // true
console.log(isAutomorphic(76));  // true
console.log(isAutomorphic(7));   // false