//Accept an English alphabet from user and check if it is a consonant or a vowel.


let char = prompt("Enter alphabet");
char.toLocaleLowerCase();
//vowels - a,e,i,o,u
//consonant - apart from vowels all are consonant.

const checkAlphabet = () => {

    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        alert("alphabet is vowel");
    }
    else {
        alert("alphabet is consonant.");
    }
}
checkAlphabet();


