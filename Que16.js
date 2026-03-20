//Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)


let userName = prompt("Enter Name");
let age = Number(prompt("Enter Age"));


const validVoter = () => {

    if (age > 18) {
        console.log(`Hello ${userName}, You are a valid voter.`);
    }
    else {
        console.log(`Sorry ${userName}, you can't cast the vote After 18 you can vote.`);
    }

}
validVoter();