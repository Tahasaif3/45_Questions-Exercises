// List of current usernames
let current_users: string[] = ["John", "Alice", "Bob", "Charlie", "David"];

// List of new usernames
let new_users: string[] = ["Alice", "Sarah", "John", "Mike", "Emily"];

// Convert current_users to lowercase for case insensitive comparison
const currentUsersLowercase: string[] = current_users.map(user => user.toLowerCase());

// Loop through new_users to check for uniqueness
new_users.forEach(newUser => {
    // Convert newUser to lowercase for case insensitive comparison
    const newUserLowercase: string = newUser.toLowerCase();
    
    // Check if newUser is already in current_users
    if (currentUsersLowercase.includes(newUserLowercase)) {
        console.log(`Username '${newUser}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${newUser}' is available.`);
    }
});