//Reverse for loop. Print n to 1.

let num = Number(prompt("Enter number"));


const reverse = () => {

    if (num > 0) {
        for (let i = num; i >= 1; i--) { 
            console.log("reverse number", i);
        }
    }
}
reverse();
