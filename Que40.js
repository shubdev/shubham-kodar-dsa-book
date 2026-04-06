//Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function isStrongNumber(num) {
    const originalNum = num;
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += factorial(digit);
        num = Math.floor(num / 10);
    }
    return originalNum === sum;
}

// Example usage:
const number = 145;
const result = isStrongNumber(number);
if (result) {
    console.log(`${number} is a strong number.`);
} else {
    console.log(`${number} is not a strong number.`);
}
