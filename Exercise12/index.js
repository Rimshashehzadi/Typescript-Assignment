var names = ["Nimra", "Alina", "Faiza", "Shimza"];
function greetPeople(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log("Greetings, ".concat(name_1, "! Have a great day!"));
    }
}
greetPeople(names);
