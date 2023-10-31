let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Printing the names of each animal
console.log("Names of the animals:");
for (let animal of animals) {
    console.log(animal);
}

console.log("\nStatements about the animals:");
// Printing statements about each animal
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Additional sentence about common characteristic
console.log("\nAny of these animals would make a great pet!");
