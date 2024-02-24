let guestList: string[] = ["Alice", "Bob", "Charlie", "David"];

// Print the original guest list
console.log("Original Guest List:");
guestList.forEach(guest => console.log(guest));

// Guest who can't make it
const unableToAttend: string = "Charlie";
console.log(`\n${unableToAttend} can't make it to the dinner.\n`);

// Find the index of the guest who can't make it
const indexOfUnableToAttend: number = guestList.indexOf(unableToAttend);

// Replace the guest who can't make it with a new guest
const newGuest: string = "Eve";
guestList[indexOfUnableToAttend] = newGuest;

// Print the modified guest list
console.log("Updated Guest List:");
guestList.forEach(guest => console.log(guest));