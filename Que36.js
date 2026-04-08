//Accept a number and print its reverse
function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = (reversed * 10) + digit;
        num = Math.floor(num / 10);
    }
    return reversed;
}
// Example usage:
const number = 12345;
const reversedNumber = reverseNumber(number);
console.log(`The reverse of ${number} is ${reversedNumber}.`);
