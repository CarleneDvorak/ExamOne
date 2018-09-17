 const shoppingCart = {
    fName: "Carlene",
    lName: "Dvorak",
    items:  ["Shampoo", "Conditioner", "Hairspray"],
    price: [8.50, 7.00, 5.25],

}


 function  printShoppingCart(){
return `Name: ${shoppingCart.fName} ${shoppingCart.lName} 
Items Purchases:
${shoppingCart.items[0]}  $${shoppingCart.price[0]} 
${shoppingCart.items[1]}  $${shoppingCart.price[1]} 
${shoppingCart.items[2]}  $${shoppingCart.price[2]}`

}

function totalPrice(){
    return  `Total Purchase: $`  +
    (shoppingCart.price[0]  + shoppingCart.price[1] + shoppingCart.price[2])
}

console.log(printShoppingCart());
console.log(totalPrice());

