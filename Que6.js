//Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)

let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));

const swap = () => {

    a = a + b;
    b = a - b;
    a = a - b;
    alert(`after swaping: a= ${a} , b=${b}`);

    console.log(a = a + b); //10 + 6 => a=16
    console.log(b = a - b);  // 16 - 6 => b= 10
    console.log(a = a - b);  //16 -10 =>  a=6

}
swap();


