// Tests for equality and inequality with strings
let name1 = 'John';
let name2 = 'Jane';

console.log("Is name1 == 'John'? I predict True.");
console.log(name1 == 'John'); // True

console.log("Is name1 != name2? I predict True.");
console.log(name1 != name2); // True

console.log("Is name2 == 'John'? I predict False.");
console.log(name2 == 'John'); // False

// Tests using the lower case function
let city = 'New York';

console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); // True

// Numerical tests
let number1 = 5;
let number2 = 8;

console.log("Is number1 > number2? I predict False.");
console.log(number1 > number2); // False

console.log("Is number1 <= number2? I predict True.");
console.log(number1 <= number2); // True

// Tests using "and" and "or" operators
let condition1 = true;
let condition2 = false;

console.log("Is condition1 AND condition2? I predict False.");
console.log(condition1 && condition2); // False

console.log("Is condition1 OR condition2? I predict True.");
console.log(condition1 || condition2); // True

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'cherry'];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana')); // True

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape')); // True
