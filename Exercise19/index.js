var guests = ["Jack", "John", "Jane", "Jim", "Janet", "Jake"];
function printInvitations(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log("Dear ".concat(name_1, ", you are invited to dinner."));
    }
}
// Inform about the total number of people invited
console.log("You are inviting ".concat(guests.length, " people to dinner."));
// Call the function to print invitations
printInvitations(guests);
