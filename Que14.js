//Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.


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