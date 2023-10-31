"use strict";
// Define an array of people to invite
let guestList = ["Alina", "Faiza", "Shimza"];
// Print initial invitations
for (let i = 0; i < guestList.length; i++) {
    let guest = guestList[i];
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us!`);
}
// Simulate a guest not being able to make it
let unableToAttend = guestList[1]; // Faiza can't make it
console.log(`${unableToAttend} is unable to attend the dinner.`);
// Replace the guest who can't make it with a new guest
guestList[1] = "Nimra"; // Invite Nimra
// Print second set of invitations
for (let i = 0; i < guestList.length; i++) {
    let guest = guestList[i];
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us!`);
}
