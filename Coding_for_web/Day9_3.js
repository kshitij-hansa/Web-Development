// In this we see the how to use the of 
// Blocking and Non-blocking (or)   synchronous and non-synchronous

// this is non-synchronous
const fs = require("fs");
fs.readFile("first.txt","utf-8",(a, b)=>{
    console.log(a, b);
});
console.log('this is a new file');
