//Sum up to n terms. 
//program to find the sum of first n natural numbers:

let num = Number(prompt("Enter number"));
let sum = 0;

const sumOfNumber = () => {
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            sum = sum + i;
        }
        console.log("sum of n numbers=", sum);
    }
}
sumOfNumber();
console.log("sum=", sum);
