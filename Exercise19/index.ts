let guests: string[] = ["Jack", "John", "Jane", "Jim", "Janet", "Jake"];

function printInvitations(names: string[]): void {
  for (let name of names) {
    console.log(`Dear ${name}, you are invited to dinner.`);
  }
}

// Inform about the total number of people invited
console.log(`You are inviting ${guests.length} people to dinner.`);

// Call the function to print invitations
printInvitations(guests);
