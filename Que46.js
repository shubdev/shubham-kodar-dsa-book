//Right Triangle - Star Pattern

function rightTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str += "* ";
        }
        console.log(str);
    }
}
// Example usage:
rightTriangle(5);



