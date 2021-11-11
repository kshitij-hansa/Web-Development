console.log("this is a mode.js");
// Creating the funtion for Avarage
function avarage(arr){
    let sum=0;
     arr.forEach(element => {
         sum+= element;
     });
     return sum/arr.length;
 }

//  We export the funtion of avarage
// this is a normal method
// module.exports = avarage;

// shot-cute method
// by this method you used all of this by (mod.)method
module.exports= {
    avg = avarage,
    naam = "kshitij",
    // Class = "2nd year b.com"
}
