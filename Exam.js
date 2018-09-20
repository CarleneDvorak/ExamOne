 const shoppingCart = {
    fName: "Carlene",
    lName: "Dvorak",
    items:  ["Shampoo", "Conditioner", "Hairspray"],
    price: [8.50, 7.00, 5.00],

    //this is a function inside an object
    printShoppingCart(){
        var total= 0;
        let cost='';  
            for (let i = 0; i <= this.items.length - 1; i ++){
        cost = cost +`${this.items[i]}  $${this.price[i]} \n` ;                  
            
        }
        for (let i = 0; i <this.price.length; i++){
            total = this.price[i] + total;
        }
return `Name: ${this.fName} ${this.lName}
Items Purchases:  
${cost}Total Purchase: $${total}`;
    }
}
    console.log(shoppingCart.printShoppingCart());
 
        
