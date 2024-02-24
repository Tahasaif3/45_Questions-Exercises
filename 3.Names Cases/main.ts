let personName: string = "Taha Saif";

// Lower Case
console.log("Lowercase:", personName.toLowerCase());

// Upper Case
console.log("Uppercase:", personName.toUpperCase());

// Title case
console.log("Titlecase:", personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));

