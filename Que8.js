//Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)


let initialAmout = Number(prompt("Enter initial amount:"));
let rate = Number(prompt("Enter rate of interest:"));
let time = Number(prompt("Enter time (in years):"));

let amount = initialAmout * Math.pow((1 + rate / 100), time);
let compoundInterest = amount - initialAmout;

console.log(`Compound Interest = ${compoundInterest}`);
alert(`Compound Interest = ${compoundInterest}`)