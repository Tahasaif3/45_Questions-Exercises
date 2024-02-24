var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette"];
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
magicians = make_great(magicians);
show_magicians(magicians);
