//Print the sum of all even & odd numbers in a range separately.

let number = Number(prompt("Enter number"));

const sum = (number) => {
  let even = 0;
  let odd = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      even += i;
    } else {
      odd += i;
    }
    console.log("even =", even);
    console.log("odd =", odd);
  }
};
sum(number);
