function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}

// Array of magician's names
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Creating a copy of the original array
let original_magicians = [...magician_names];

// Making the magicians great
let great_magicians = make_great(original_magicians);

// Showing the original magicians
console.log("Original Magicians:");
show_magicians(magician_names);

// Showing the great magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
