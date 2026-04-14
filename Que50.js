//Mirrored Right Triangle Pattern

function mirroredRightTriangle(n) {


    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= n - 1; j++) {
            if (j < n - i + 1) {

                str += "* ";
            }
        }
        console.log(str);
    }
}
mirroredRightTriangle(5);

