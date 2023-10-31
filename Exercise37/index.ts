function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

// Creating shirts with default values
make_shirt(); // Large shirt with default message
make_shirt("Medium"); // Medium shirt with default message

// Creating a shirt with a custom size and message
make_shirt("Small", "Hello World!"); // Small shirt with custom message
