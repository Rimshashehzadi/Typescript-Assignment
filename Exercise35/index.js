var animals = ["Dog", "Cat", "Rabbit"];
// Printing the names of each animal
console.log("Names of the animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\nStatements about the animals:");
// Printing statements about each animal
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Additional sentence about common characteristic
console.log("\nAny of these animals would make a great pet!");
