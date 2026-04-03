//Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)


function seprate(num) {
    while (num > 0) {
        let digit = num % 10;
        console.log(digit);
        num = Math.floor(num / 10);
    }
}

seprate(123);
