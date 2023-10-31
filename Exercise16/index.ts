let guests: string[] = ["John", "Jane", "Jim", "Jill"];

function printInvitations(names: string[]): void {
  for (let name of names) {
    console.log(`Dear ${name}, you are invited to dinner.`);
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

