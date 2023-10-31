let current_users: string[] = ["john", "jane", "mark", "susan", "peter"];
let new_users: string[] = ["jane", "susan", "michael", "sarah", "paul"];

for (let new_user of new_users) {
    let is_username_taken = current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());

    if (is_username_taken) {
        console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations, ${new_user} is available.`);
    }
}
