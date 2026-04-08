/**
 * //Print \hello\" until user gives wrong input using do while"
 */

let  input = prompt("Enter 'yes' to print \\hello\\ or any other input to stop: ");

do {
    if (input.toLowerCase() === "yes") {
        console.log("hello");
        input = prompt("Enter 'yes' to print 'hello' or any other input to stop: ");
    }
} while (input.toLowerCase() === "yes");

