//Take a number as input and print its table (Ex: 5 * 1 = 5 ... up to 10 terms)

let num = Number(prompt("Enter Number"));


const table = () => {

    if (num) {
        for (let i = 1; i <= 10; i++) {
            let calnum = num * i
            console.log(calnum);
        }
    }
}
table()