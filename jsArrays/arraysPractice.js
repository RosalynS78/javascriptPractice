// Lotto Numbers Exercise
// Let's get some practice creating arrays. Please define a variable called lottoNumbers and set it equal to an array containing any 6 numbers.  It's simple, but we've got to start somewhere!

// Define lottoNumbers below:


// explanation - lottoNumbers is the variable [this is a container for array of numbers]
let lottoNumbers = [50, 25, 30, 45, 20, 10];


// Array Access Exercise
// I've provided you with a leaderboard array, which consists of 4 strings.  Without touching line 1, please make the following changes:

// Unfortunately, I misspelled the 2nd name in the leaderboard array.  I meant to write "Luna" instead of "Lua".  Please update it to "Luna" (without changing line 1)

// Bellatrix has fallen off the leaderboard and has been replaced by Draco! Please update the last element of the array so that it holds "Draco" instead of "Bellatrix" (once again, please do this without changing line 1)

const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; 

leaderboard[1] = "Luna";
leaderboard[3] = "Draco";
console.log(leaderboard);
// Harry,Luna,Hermione,Draco

// Push/Pop/Shift/Unshift Practice
// I've provided you with an array called planets. Unfortunately, I'm an idiot who doesn't know much about our solar system and I made some mistakes.  Please help me fix the planets array!  Using the array methods we just learned...

// Remove the first element, "The Moon", from the planets array.  The moon is not a planet!

// Add in "Saturn" at the very end of the planets array

// Add "Mercury" as the first element in the planets array.

// At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]

// (This one is super easy to cheat on.  Please use the array methods we just covered, rather than simply changing the values in planets directly)

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

planets.shift()

let newPlanet = planets.push('Saturn');

planets.unshift('Mercury');

console.log(planets);