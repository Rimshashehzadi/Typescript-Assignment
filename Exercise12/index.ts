let names = ["Nimra", "Alina", "Faiza", "Shimza"];
function greetPeople(names: string[]): void {
  for (let name of names) {
    console.log(`Greetings, ${name}! Have a great day!`);
  }
}

greetPeople(names);
