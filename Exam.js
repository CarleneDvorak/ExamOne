 const shoppingCart = {
    fName: "Carlene",
    lName: "Dvorak"}

const items = ["Shampoo", "Conditioner", "Hairspray"];
const price = ["$8.50", "$7.00", "$5.25"];

 function  printShoppingCart(){
return `Name: ${shoppingCart.fName} ${shoppingCart.lName}
        Items Purchases:`;
       `${items} ${price}`;}

function totalPrice(){
    return `${price[0]} + ${price[1]}+ ${price[2]}`;
}

console.log(printShoppingCart());
console.log(totalPrice());

