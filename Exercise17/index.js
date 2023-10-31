var guests = ["Jack", "John", "Jane", "Jim", "Janet", "Jake"];
function printInvitations(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log("Dear ".concat(name_1, ", you are invited to dinner."));
    }
}
// Inform that only two people can be invited
console.log("Unfortunately, we can only invite two people for dinner.");
// Remove guests one at a time until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print message to the two remaining guests
printInvitations(guests);
// Remove the last two names from the list
guests.pop();
guests.pop();
// Print the list to confirm it's empty
console.log(guests); // Output: []
