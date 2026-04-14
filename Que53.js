// x pattern 

function xPattern(n) {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n; j++) {
            if (j === i || j === n - 1 - i) {
                line += '*';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

xPattern(7);

