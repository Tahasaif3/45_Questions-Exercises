var guestList = ["Alice", "Bob", "Charlie", "David"];
// Print the original guest list
console.log("Original Guest List:");
guestList.forEach(function (guest) { return console.log(guest); });
// Guest who can't make it
var unableToAttend = "Charlie";
console.log("\n".concat(unableToAttend, " can't make it to the dinner.\n"));
// Find the index of the guest who can't make it
var indexOfUnableToAttend = guestList.indexOf(unableToAttend);
// Replace the guest who can't make it with a new guest
var newGuest = "Eve";
guestList[indexOfUnableToAttend] = newGuest;
// Print the modified guest list
console.log("Updated Guest List:");
guestList.forEach(function (guest) { return console.log(guest); });
