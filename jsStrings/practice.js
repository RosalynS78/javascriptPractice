// Let's get some practice working with string methods. I've provided you with a variable in index.js called message.  Without altering the original value stored in message, please define a variable called whisper that is a lowercased version of message, with all the extra space at the beginning and end removed.  You will need to use two string methods that we just covered.  Don't forget you can chain them together on a single line!

const message = "   TASTE THE RAINBOW!   ";

// my answer 
let whisper = 'message.toLowerCase().trim()'; // why it's wrong 1. const 2. no quotations


// solution
const whisper = message.trim().toLowerCase();