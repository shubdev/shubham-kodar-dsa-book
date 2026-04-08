// Make a choice based calculator using do while

let choice;

do {
    choice = prompt("Enter your choice: \n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit");
    let num1, num2, result;
    switch (choice) {
        case "1":
            num1 = Number(prompt("Enter first number: "));

            num2 = Number(prompt("Enter second number: "));
            result = num1 + num2;
            console.log(`Result: ${result}`);
            break;

        case "2":
            num1 = Number(prompt("Enter first number: "));
            num2 = Number(prompt("Enter second number: "));
            result = num1 - num2;
            console.log(`Result: ${result}`);
            break;

        case "3":
            num1 = Number(prompt("Enter first number: "));
            num2 = Number(prompt("Enter second number: "));
            result = num1 * num2;
            console.log(`Result: ${result}`);
            break;

        case "4":
            num1 = Number(prompt("Enter first number: "));
            num2 = Number(prompt("Enter second number: "));
            if (num2 === 0) {
                console.log("Cannot divide by zero");
            }
            else {
                result = num1 / num2;
                console.log(`Result: ${result}`);
            }
            break;

        case "5":
            console.log("Exiting...");
            break;

        default:
            console.log("Invalid choice, please try again.");
    }
} while (choice !== "5");


