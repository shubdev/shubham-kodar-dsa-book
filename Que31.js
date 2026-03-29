//Print the sum of all even & odd numbers in a range separately.

const sumOfEvenAndOdd = (start, end) => {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  return { evenSum, oddSum };
};







