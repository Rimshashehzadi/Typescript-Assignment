function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with city-country pairs
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("New York", "USA");
let city3 = city_country("Paris", "France");

console.log(city1); // Output: Lahore, Pakistan
console.log(city2); // Output: New York, USA
console.log(city3); // Output: Paris, France
