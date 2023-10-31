function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling the function with city-country pairs
var city1 = city_country("Lahore", "Pakistan");
var city2 = city_country("New York", "USA");
var city3 = city_country("Paris", "France");
console.log(city1); // Output: Lahore, Pakistan
console.log(city2); // Output: New York, USA
console.log(city3); // Output: Paris, France
