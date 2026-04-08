//Question 22 using Switch (Check Consonant or Vowel using Switch)

function checkVowelOrConsonant(char) {
    switch (char.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(`${char} is a vowel.`);
            break;
        default:
            if (char.match(/^[a-z]$/i)) {
                console.log(`${char} is a consonant.`);
            }
            else {
                console.log(`${char} is not an alphabet.`);
            }
            
    }
}
// Example usage:
checkVowelOrConsonant('a');
checkVowelOrConsonant('b');
checkVowelOrConsonant('E');
checkVowelOrConsonant('z');
checkVowelOrConsonant('1');
checkVowelOrConsonant('@');


