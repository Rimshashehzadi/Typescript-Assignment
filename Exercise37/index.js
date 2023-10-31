function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size, "-sized shirt with the message: \"").concat(message, "\"."));
}
// Creating shirts with default values
make_shirt(); // Large shirt with default message
make_shirt("Medium"); // Medium shirt with default message
// Creating a shirt with a custom size and message
make_shirt("Small", "Hello World!"); // Small shirt with custom message
