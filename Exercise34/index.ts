let favorite_pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Printing the names of each pizza
console.log("Names of my favorite pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

console.log("\nStatements about my favorite pizzas:");
// Printing statements about each pizza
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence about liking pizza
console.log("\nI really love pizza!");
