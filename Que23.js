//Accept an integer and Print \Hello World\" n times"


let int = Number(prompt("Enter number"));


const print = () => {

    if (int > 0) {
        for (let i = 1; i <= int; i++) {
            console.log("Hellow World !")
        }
    }
    else {
        console.log("enter positive number greater than 0");
    }
}
print();