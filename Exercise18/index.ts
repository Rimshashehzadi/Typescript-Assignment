let placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];

// Original order
console.log("Original Order:");
console.log(placesToVisit);

// Alphabetical order (without modifying the actual list)
let sortedPlaces = [...placesToVisit].sort();
console.log("\nAlphabetical Order:");
console.log(sortedPlaces);

// Original order is still intact
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Reverse alphabetical order (without modifying the actual list)
let reverseSortedPlaces = [...placesToVisit].sort().reverse();
console.log("\nReverse Alphabetical Order:");
console.log(reverseSortedPlaces);

// Original order is still intact
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("\nBack to Original Order:");
console.log(placesToVisit);

// Sort in alphabetical order (modifies the actual list)
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);

// Sort in reverse alphabetical order (modifies the actual list)
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
