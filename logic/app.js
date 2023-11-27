console.log("Hello from our First JS File");
console.log("Goodbye")

// conditionals 

console.log("Before Conditional");
if (1 + 1 === 2) {
    console.log("Math still works")
}
console.log("After Conditional");

// if false only the code inside the curly braces does not run
console.log("Before Conditional");
if (1 + 2 === 2) {
    console.log("Math still works")
}
console.log("After Conditional");

//random numbers
let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5");
    console.log(random);
}

if (random >= 0.5) {
    console.log("Your number is greater than 0.5");
    console.log(random);
}

// else-if
const dayOfWeek = 'Friday';

if(dayOfWeek === 'Monday') {
    console.log("Monday's Suck");
} else if (dayOfWeek === 'Saturday') {
    console.log("Yay Saturday");
} else if (dayOfWeek === 'Friday') {
    console.log("TGIF");
}

//  0-5 Free, 5- 10 Child $10, 10-65 Adult $20, 65+ Senior $10

const age = 34;
if (age < 5) {
    console.log("Baby - Free");
} else if (age < 10) {
    console.log("Child - $10");
} else if (age < 65) {
    console.log("Adult - $20")
}

// else

// const dayOfWeek2 = prompt('Enter a Day').toLowerCase();

// if(dayOfWeek2 === 'monday') {
//     console.log("Monday's Suck");
// } else if (dayOfWeek2 === 'saturday') {
//     console.log("Yay Saturday");
// } else if (dayOfWeek2 === 'friday') {
//     console.log("TGIF");
// } else {
//     console.log("Meh");
// }

let random2 = Math.random();
if (random2 < 0.5) {
    console.log("Your number is less than 0.5");

} else {
    console.log ("Your number is greater (or equal) than 0.5");  
}
console.log(random2);

const age2 = 80;
if (age2 < 5) {
    console.log("Baby - Free");
} else if (age2 < 10) {
    console.log("Child - $10");
} else if (age2 < 65) {
    console.log("Adult - $20")
} else {
    console.log("Senior - $10");
}

//nesting

//separate conditionals
const password = prompt("please enter your password");
// password must be 6+ characters
// if (password.length >= 6) {
//     console.log("valid");
// } else {
//     console.log("Invalid password needs to be at least 6 characters");
// }
// password cannot include space
// if (password.indexOf(' ') === -1) {
//     console.log("valid no spaces");
// } else {
//     console.log("Invalid password must not include spaces");
// }

// password must be 6+ characters
if (password.length >= 6) {
    // password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("valid password");
    } else {
        console.log("password must not include spaces");
    }
} else {
    console.log("password too short. must be 6+ characters");
}