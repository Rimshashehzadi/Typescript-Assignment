let guests: string[] = ["Jack", "John", "Jane", "Jim", "Janet", "Jake"];

function printInvitations(names: string[]): void {
  for (let name of names) {
    console.log(`Dear ${name}, you are invited to dinner.`);
  }
}

// Inform that only two people can be invited
console.log("Unfortunately, we can only invite two people for dinner.");

// Remove guests one at a time until only two names remain
while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print message to the two remaining guests
printInvitations(guests);

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print the list to confirm it's empty
console.log(guests); // Output: []
