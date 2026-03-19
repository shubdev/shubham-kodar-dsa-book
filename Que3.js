//Accept two integers from user and print the sum (Ex - The sum of 45 & 12 = 57)

let num1 = Number(prompt("Enter number1"));
let num2 = Number(prompt("Enter number2"))
const user = (num1, num2) => {
    let sum = num1 + num2;
    console.log(`The sum of ${num1} & ${num2} = ${sum}`);
    alert(`The sum of ${num1} & ${num2} = ${sum}`);

}
user(num1, num2);