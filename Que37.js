//Accept a number and check if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)

function isPalindromicNumber(num) {
    const originalNum = num;
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = (reversed * 10) + digit;
        num = Math.floor(num / 10);
    }

    return originalNum === reversed;
}
// Example usage:   
const number = 12321;
const result = isPalindromicNumber(number);
if (result) {
    console.log(`${number} is a palindromic number.`);
}
else {
    console.log(`${number} is not a palindromic number.`);
}


