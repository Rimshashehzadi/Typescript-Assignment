var guests = ["John", "Jane", "Jim", "Jill"];
function printInvitations(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log("Dear ".concat(name_1, ", you are invited to dinner."));
    }
}
// Inform about the bigger table
console.log("Good news! We found a bigger dinner table!");
// Add a new guest to the beginning of the array
guests.unshift("Jack");
// Add a new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, "Janet");
// Add a new guest to the end of the array
guests.push("Jake");
// Print new set of invitation messages
printInvitations(guests);
