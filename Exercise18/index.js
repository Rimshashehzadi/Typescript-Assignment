var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];
// Original order
console.log("Original Order:");
console.log(placesToVisit);
// Alphabetical order (without modifying the actual list)
var sortedPlaces = __spreadArray([], placesToVisit, true).sort();
console.log("\nAlphabetical Order:");
console.log(sortedPlaces);
// Original order is still intact
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);
// Reverse alphabetical order (without modifying the actual list)
var reverseSortedPlaces = __spreadArray([], placesToVisit, true).sort().reverse();
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
