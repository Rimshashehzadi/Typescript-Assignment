// // Data of guest in arrays
// let guest = ["Alina","Faiza","Shimza"];
// // I would  like to invite guest on dinner
// for (let i=0; i<guest.length; i++){
//     let inviteguest= guest[i];
//     console.log(`I would like to invite ${inviteguest} on dinner.`);
// }
// Define an array of people to invite
let guestList: string[] = ["Alina", "Faiza", "Shimza"];

// Iterate through the array and print invitations
for (let i = 0; i < guestList.length; i++) {
  let guest = guestList[i];
  console.log(
    `Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us!\nSincerely, [Rimsha]`
  );
}
