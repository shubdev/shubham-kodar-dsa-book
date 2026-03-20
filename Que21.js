//Bijli Bill


let unit = Number(prompt("Enter number.")); //430 //330
let amount = 0
const calculateElectricityBill = () => {

    if (unit > 400) {
        amount += (unit - 400) * 13;
        unit = 400
        alert(`bill ${amount}`)
    }
    else if (unit > 201 && unit <= 400) {
        amount += (unit - 200) * 8;
        unit = 200;
        alert(`bill ${amount}`)
    }
    else if (unit > 101 && unit <= 200) {
        amount += (unit - 100) * 6;
        unit = 100;
        alert(`bill ${amount}`)
    }
    if (unit > 0 && unit <= 100) {
        amount += unit * 4.2;
        alert(`bill ${amount}`)
    }

}
calculateElectricityBill()