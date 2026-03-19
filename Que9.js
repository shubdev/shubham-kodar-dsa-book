//Accept the three sides of triangle and calculate the area using Heron's formula

let a = Number(prompt("Enter side a:"));
let b = Number(prompt("Enter side b:"));
let c = Number(prompt("Enter side c:"));

// semi-perimeter
let s = (a + b + c) / 2;

// Heron's formula
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(`Area of triangle = ${area}`);
alert(`Area of triangle = ${area}`);