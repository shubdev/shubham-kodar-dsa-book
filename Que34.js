//Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)

function printDigits(num) {
  while (num > 0) {
    let digit = num % 10; // Get the last digit
    console.log(digit); // Print the digit
    num = Math.floor(num / 10); // Remove the last digit
  } 
}

// Example usage:
const number = 123;
printDigits(number); // Output: 3, 2, 1 

