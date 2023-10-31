function describe_city(city: string, country: string = "Default Country"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function with different cities and countries
describe_city("Karachi", "Pakistan"); // Karachi is in Pakistan
describe_city("Paris"); // Paris is in Default Country
describe_city("New York", "USA"); // New York is in USA
