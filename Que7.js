//Accept the length and width of a rectangle. Calculate & print the area and perimeter.

let length = Number(prompt("Enter lenth"));
let width = Number(prompt("Enter width"));

//formula
let area = length * width;
let perimeter = 2 * (length + width);


alert(`Area = ${area}`);
alert(`Perimeter = ${perimeter}`);