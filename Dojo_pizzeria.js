var pizza1 = {
    crustType: "Deep dish",
    sauceType: "Traditional",
    cheeses: "Mozzarella",
    toppings: ["pepperoni", "sausage"]
}

var pizza2 = {
    crustType: "Hand tossed",
    sauceType: "Marinara",
    cheeses: ["Mozzarella", "Feta"],
    toppings: ["mushrooms", "olives", "onions"]
}
var pizza3 = {
    crustType: "Burnt",
    sauceType: "Sweet Sauce",
    cheeses: "no Cheese",
    toppings: "meatballs",
}
var pizza4 = {
    crustType: "Stuffed",
    sauceType: "Marinara",
    cheeses: "Mozzarella",
    toppings: ["ham", "pineapple", "onions"]
}


function pizzaStuff(pizzaOven){
    console.log("Information about this pizza:\n");
    console.log("Crust Type: " + pizzaOven.crustType);
    console.log("Sauce: " + pizzaOven.sauceType);
    console.log("Cheese: " + pizzaOven.cheeses);
    console.log("Toppings: ");
    for(var i=0; i<pizzaOven.toppings.length; i++){
        console.log("    - " + pizzaOven.toppings[i]);
    }
    console.log("")
}

var crusts_ran = ["Burnt", "Stuffed", "Deep Dish", "Hand Tossed"]
var sauces_ran = ["Marinara","Sweet Sauce", "Traditional"]
var cheeses_ran = ["Mozzarella", "Feta", "no cheese"]
var toppings_ran = ["ham", "pineapple", "onions", "bacon", "mushrooms", "olives", "pepperoni", "sausage"]

function randomPizza(){
    console.log("Information about this pizza:\n");
    var rancrusts = Math.floor(Math.random() * crusts_ran.length);
    console.log("Crust Type: " + crusts_ran[rancrusts])
    var ransauces = Math.floor(Math.random() * sauces_ran.length);
    console.log("Sauce: " + sauces_ran[ransauces])
    var rancheeses = Math.floor(Math.random() * cheeses_ran.length);
    console.log("Cheese: " + cheeses_ran[rancheeses])
    var rantoppings = Math.floor(Math.random() * toppings_ran.length);
    console.log("Toppings: " + toppings_ran[rantoppings])
}


pizzaStuff(pizza1);
pizzaStuff(pizza2);
pizzaStuff(pizza3);
pizzaStuff(pizza4);
randomPizza();
