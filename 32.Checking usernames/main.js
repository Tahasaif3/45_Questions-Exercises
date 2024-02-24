// List of current usernames
var current_users = ["John", "Alice", "Bob", "Charlie", "David"];
// List of new usernames
var new_users = ["Alice", "Sarah", "John", "Mike", "Emily"];
// Convert current_users to lowercase for case insensitive comparison
var currentUsersLowercase = current_users.map(function (user) { return user.toLowerCase(); });
// Loop through new_users to check for uniqueness
new_users.forEach(function (newUser) {
    // Convert newUser to lowercase for case insensitive comparison
    var newUserLowercase = newUser.toLowerCase();
    // Check if newUser is already in current_users
    if (currentUsersLowercase.includes(newUserLowercase)) {
        console.log("Username '".concat(newUser, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Username '".concat(newUser, "' is available."));
    }
});
