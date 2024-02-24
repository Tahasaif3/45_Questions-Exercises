var guestList = ["Ahmed", "Areeba", "Babar", "Taha", "Amna", "Sohail", "Hamza"];
// Print the original guest list
console.log("Original Guest List:");
guestList.forEach(function (guest) { return console.log(guest); });
// Guest who can't make it
var unableToAttend = "Ahmed";
console.log("\n".concat(unableToAttend, " can't make it to the dinner.\n"));
// Find the index of the guest who can't make it
var indexOfUnableToAttend = guestList.indexOf(unableToAttend);
// Replace the guest who can't make it with a new guest
var newGuest = "Amna";
guestList[indexOfUnableToAttend] = newGuest;
// Inform about the bigger dinner table
console.log("\nWe found a bigger dinner table!\n");
// Add new guests
guestList.unshift("Areeba"); // Add one new guest to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "Taha"); // Add one new guest to the middle
guestList.push("Sohail"); // Use append() to add one new guest to the end
// Inform about the limited space
console.log("\nSorry, we can only invite two people for dinner.\n");
// Remove guests until only two remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print invitation messages to the remaining guests
console.log("\nInvitation Messages:");
guestList.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you're still invited to the dinner.")); });
// Remove the last two names from the list
guestList.splice(0, guestList.length);
