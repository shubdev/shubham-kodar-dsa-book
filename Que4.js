//Accept the User's name, age and print in following manner (Ex - Hello Shery, you are 12 years old.)

let userName = prompt("Add your name.");
let userAge = prompt("Add your age.");

const userInfo = () => {
    console.log(`Hello ${userName}, you are ${userAge} years old.`);
    alert(`Hello ${userName}, you are ${userAge} years old.`);
}
userInfo();
