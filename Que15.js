//Accept an integer and check whether it is an even number or odd.


let num = Number(prompt("Enter the Number."));

const evenOdd = () => {

    if (num % 2 == 0) {
        alert("number is even.")
    }
    else {
        alert("number is odd.")
    }
}
evenOdd();