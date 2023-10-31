var current_users = ["john", "jane", "mark", "susan", "peter"];
var new_users = ["jane", "susan", "michael", "sarah", "paul"];
var _loop_1 = function (new_user) {
    var is_username_taken = current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); });
    if (is_username_taken) {
        console.log("Sorry, ".concat(new_user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations, ".concat(new_user, " is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
