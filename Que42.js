//Print Weekday using Switch

function printWeekday(day) {        
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2: 
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");     
    }
}

// Example usage:
printWeekday(1); // Output: Monday
printWeekday(5); // Output: Friday          
printWeekday(7); // Output: Sunday
printWeekday(0); // Output: Invalid day

