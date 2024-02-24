let guestList: string[] = ["Ahmed", "Babar", "Areeba", "Sohail", "Hamza"];

// Print the original guest list
console.log("Original Guest List:");
guestList.forEach(guest => console.log(guest));

// Guest who can't make it
const unableToAttend: string = "Areeba";
console.log(`\n${unableToAttend} can't make it to the dinner.\n`);

// Find the index of the guest who can't make it
const indexOfUnableToAttend: number = guestList.indexOf(unableToAttend);

// Replace the guest who can't make it with a new guest
const newGuest: string = "Hamza";
guestList[indexOfUnableToAttend] = newGuest;

// Inform about the bigger dinner table
console.log("\nWe found a bigger dinner table!\n");

// Add new guests
guestList.unshift("Amna"); // Add one new guest to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "Taha"); // Add one new guest to the middle
guestList.push("Shibra"); // Use append() to add one new guest to the end

// Print the updated guest list with invitation messages
console.log("Updated Guest List with Invitation Messages:");
guestList.forEach(guest => console.log(`Dear ${guest}, you're invited to the dinner.`));