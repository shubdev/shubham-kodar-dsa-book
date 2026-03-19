//Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))

let char = prompt("Enter gender Male/Female");
char = char.toLowerCase();

const userGender = () => {

    if (char == "male") {
        alert("Good morning sir");
    }
    else if (char == "female") {
        alert("Good morning ma'am");
    }
    else {
        alert("invalid input.")
    }
}
userGender();