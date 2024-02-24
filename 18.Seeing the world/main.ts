let placesToVisit: string[] = ["Japan", "Italy", "Australia", "Brazil", "Egypt"];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Show that the array is still in its original order
console.log("\nStill in Original Order:");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("\nStill in Original Order:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("\nBack to Original Order:");
console.log(placesToVisit);

// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);

// Sort to change the array so it's stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);