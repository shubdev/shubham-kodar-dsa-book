//Print natural number up to n.


let n = Number(prompt("Enter Number"))
const print = () => {

    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            console.log(i);
        }
    }
    else {
        console.log("enter the poitive valid number");
    }
}
print();