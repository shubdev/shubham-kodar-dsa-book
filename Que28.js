//Factorial of a number

let int = Number(prompt("Enter Number."));


const Factorial = (int) => {
    let res = 1;

    for (let i = 1; i <= int; i++) {
        res = res * i
        console.log("res", res);
    }
    console.log("r", res);

}
Factorial(int);