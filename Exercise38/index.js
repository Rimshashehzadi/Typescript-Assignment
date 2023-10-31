function describe_city(city, country) {
    if (country === void 0) { country = "Default Country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function with different cities and countries
describe_city("Karachi", "Pakistan"); // Karachi is in Pakistan
describe_city("Paris"); // Paris is in Default Country
describe_city("New York", "USA"); // New York is in USA
