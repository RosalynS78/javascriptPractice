// Let's get some practice working with string methods. I've provided you with a variable in index.js called message.  Without altering the original value stored in message, please define a variable called whisper that is a lowercased version of message, with all the extra space at the beginning and end removed.  You will need to use two string methods that we just covered.  Don't forget you can chain them together on a single line!

const message = "   TASTE THE RAINBOW!   ";

// my answer 
let whisper = 'message.toLowerCase().trim()'; // why it's wrong 1. const 2. no quotations


// solution
const whisper = message.trim().toLowerCase();
console.log(whisper); //returns whisper

// I've provided you with a word variable, set to "skateboard".  Your goal is to use string methods on word, so that you end up with the string "beard". 

// Use a string method to extract the "board" part of "skateboard"  (using the slice method)

// Replace the "o" in board with an "e" (using the replace method)

// Save the result in a variable called facialHair

const word = "skateboard";

//my answer 
const facialHair = "word.slice(4, 5).replace('o', 'e')"; //no quotations!!!

//solution
let facialHair = word.slice(5).replace("o","e");
console.log(facialHair); //returns facialHair

// template literals

`hello ${1 + 2 + 9}`
//"hello 12"
// back-ticks important not to be confused with single quote `` and ''

'hello ${1 + 2 + 9}'
//"hello ${1 + 2 + 9}"

"You bought " + qty + " " + product  + ".  Total is: " + price * qty
"You bought 5 Artichoke. Total is: 11.25"

`You bought ${qty} ${product}. Total is: $${price * qty}`
"You bought 5 Artichoke. Total is: $11.25"

