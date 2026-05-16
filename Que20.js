//Shop Discount'


let price = Number(prompt("Enter price"));


const shopDiscount = (price) => {

    for (let i = 0; i <= price.length; i++) {
        for (let j = i + 1; j < price.length; j++) {
            if (price[j] <= price[i]) {
                price[i] -= price[j];
                console.log(price);
                
            }
            breck;
        }
    }
    console.log(price);
}
shopDiscount(price);
