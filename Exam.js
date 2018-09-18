 const shoppingCart = {
    fName: "Carlene",
    lName: "Dvorak",
    items:  ["Shampoo", "Conditioner", "Hairspray"],
    price: [8.50, 7.00, 5.25],
}

function printShoppingCart() {
    String: words = "";
    for (i=0; i<shoppingCart.items.length && i<shoppingCart.price.length; i++){
        words = (words + shoppingCart.items[i] + 
            " " + shoppingCart.price[i] + "                                                                ");
        
     } 
    
     /*(
    ${shoppingCart.items[0]}  $${shoppingCart.price[0]} 
    ${shoppingCart.items[1]}  $${shoppingCart.price[1]} 
    ${shoppingCart.items[2]}  $${shoppingCart.price[2]}`)
    */

    words = (`Name:${shoppingCart.fName} ${shoppingCart.lName} 
Items Purchases:   
` + words);
    return words;
}

function totalPrice(){ 
    var cost = 0;
    for (i=0; i<shoppingCart.price.length; i++){
        cost = cost + shoppingCart.price[i];
    }
    cost = (`Total Purchase: $` + cost);
    return cost;  
}

console.log( printShoppingCart());
console.log(totalPrice());