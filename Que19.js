//Accept a year and check if it a leap year or not (google to find out what's a leap year)

let year = Number(prompt("Enter year"));


const leapYear = () => {

    if (year % 4 === 0) {
        console.log("The year is leap year", year);
    }
    else if (year % 400 === 0) {
        console.log("The year is leap year", year);
    }
    else if (year % 100 == 0) {
        console.log("The year is leap year.", year);
    }
    else {
        console.log("The year is not leap year.", year);
    }
}
leapYear();