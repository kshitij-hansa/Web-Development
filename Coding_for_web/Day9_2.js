// in this we see how to read or write the file from JS
const fs = require("fs");

// in this we cerate a read of the file by text object
let text = fs.readFileSync("first.txt","utf-8");
console.log(text);

// in text we replace the (a) to (the)
text = text.replace("a","the");

// We create the new text-file by JS
console.log("Creating the new file");
fs.writeFileSync("the_one.txt",text);

