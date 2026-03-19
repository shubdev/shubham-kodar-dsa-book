//Accept two numbers and print the greatest between them

let num1 = Number(prompt("Enter number1"));
let num2 = Number(prompt("Enter number2"));


const greater = () => {

    if (num1 > num2) {
        console.log(`greater number is= ${num1}`);
    }
    else {
        console.log(`greater number is= ${num2}`);
    }
}
greater();