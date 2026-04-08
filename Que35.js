//Sum of digits of a number (Ex: 936 = 18)
function sumOfDigits(num) {

  let str = num.toString();
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
}

console.log(sumOfDigits(936));
