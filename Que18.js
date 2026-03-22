//Accept three numbers and print the greatest among them



let num1 = Number(prompt("Enter Number 1"));
let num2 = Number(prompt("Enter Number 2"));
let num3 = Number(prompt("Enter Number 3"));


const greatestNumber = () => {

    if (num1 > num2 && num1 > num3) {
        console.log("number 1 is the greatest among other numbers.");
    }
    else if (num1 < num2 && num3 < num2) {
        console.log("number 2 is the greatest among other numbers.");
    }
    else if (num1 < num3 && num2 < num3) {
        console.log("number 3 is greatest among other numbers.");
    }
}

greatestNumber();