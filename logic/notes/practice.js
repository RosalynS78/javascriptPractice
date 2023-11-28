// Our First Conditional Exercise
// Let's get some practice with conditional statements!  In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function (something we have not yet covered in the course).   

// Write your code between the two comments in index.js

// You will automatically have access to a variable called num.  Please do not try and define num or change num in any way! I will be setting the value of num when I test your code, so that I can test different outcomes

// If num is an even number, print out "even".  Don't do anything if num is an odd number.
function isEven(num){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (num % 2 === 0) {
        console.log("Even");
        console.log(num);
   
    //AND THIS LINE ↑↑↑↑↑
}

// The modulus operator (%) returns the division remainder.

// So, 5 % 2 will result into 1 (As 2 * 2 = 4 and 1 is remainder)
// 2 % 2 will result into 0 (As 2 * 1 = 2)

// We want to use the % operator to check for the remainder of dividing a number by 2, so we determine if it's odd or even 
// So, after diving a number by 2, if the remainder (calculated by the % operator) is 0, it means the number is even (it had no remainder after divided by 2). That's why we wrote num % 2 === 0 in the `if` check - if that equality check is evaluated as true, it means the number is even. So, every even number when divided by 2 won't have a remainder, i.e. its remainder will be equal to 0, and that's what we check for.

// On the other hand, if there is a remainder (i.e. if the remainder is 1) after dividing a number by 2, then the number is odd. So, odd numbers would always have a remainder of 1, after being divided by 2.


//else if
// getColor Conditional Exercise
// Let's get some practice with conditional statements!  In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function (something we have not yet covered in the course).   

// Write your code between the two comments in index.js

// You will automatically have access to a variable called phrase.  Please do not try and define phrase or change phrase in any way! I will be setting the value of phrase when I test your code.

// Your job is to print out a color based upon the following rules:

// if phrase is 'stop', you should print out 'red'
// if phrase is 'slow', you should print out 'yellow'
// if phrase is 'go', you should print out 'green'
// if phrase is anything else, you should print out 'purple'

function getColor(phrase){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (phrase === 'stop') {
        console.log("red");
    } else if (phrase === 'slow') {
        console.log("yellow");
    } else if (phrase === 'go') {
        console.log("green");
    } else {
        console.log("purple");
    }
    
   
    //AND THIS LINE ↑↑↑↑↑
}

//nesting
// Nested Conditionals Practice
// Time for something a little bit different. I've given you a nested conditional that uses a variable called num.  I would like for you to change the value of num to another number, so that "YOU GOT ME!" is printed out. Don't change anything other than the value of num!  Leave the conditional alone!

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}

// We are checking if the num is less than or equal to 100 first then we check if num is greater than 50, So when you give any number less than 100 it will go into the first if and if the number is not greater than 50 the inner if will not be satisfied and as there is no else for the if with condition num >= 50 , so it has nothing to execute. So you will not see any output.

// The else is only for the first if condition that is num<=100. So the else will be executed only if the number is greater than 100 and the if inside the else will be executed only if num is 101/102 and the if inside that needs an even number and hence 102 alone will print the required output.

// How you set up your if/else if/else conditions can also be a question of personal preference, but I would usually go with the most concise and readable way possible. You can use operators such as && and || instead of nesting conditionals, but in some cases, you might prefer to nest them. Depending on the situation, sometimes instead of adding too many && and || operators to a single condition, it might be more readable and easier to manage to create multiple conditionals, etc. Again, it all depends on the situation, and as you accumulate more experience and practice, you will also develop your own preference and choice on how to best approach structuring specific conditional logic.

// As for the answer above, I used the word 'evaluated' in the sense that you want both conditions to be taken into account (i.e. both conditions to be evaluated and used) when deciding if the code from the } else if (num < 50 && num % 2 === 0) { condition would run.

// If you write the comma in } else if (num < 50, num % 2 === 0) { then it would treat num < 50, num % 2 === 0 as two separate expressions in JS, and it would basically just use the last one (num % 2 === 0) for the condition. So, in this context of creating conditions, you wouldn't use commas here, but instead, logical operators like && or ||


const num = Math.floor(Math.random()+102); // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}
}
// It passes the test because Math.random() returns a decimal value between 0 (inclusive) and 1 (exclusive), so when you floor that number you'll always get zero. Adding zero to 102 returns... 102!

// Logical AND Mystery Exercise
// I've provided you with a conditional statement that uses a variable called mystery  Please change the value of mystery so that the conditional is true and "YOU GOT IT" is printed to the console.  Do not change anything other than the value of mystery on line 1!

// my answer
const mystery = 'PPPPPP'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE
// correct answer 'PPPPPP7"
// mystery variable should still be defined
// the mystery variable should be a string
// the mystery variable should start with a "P" (uppercase")
// the mystery variable shold be greater than 5 characters long
// the mystery variable shold include a "7" somewhere

// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}

// explanation 
// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
// Since, we want 7 to be in the string, which means when we used String.indexOf('7') it should not be equal to -1, as if it is equal to -1, it means that 7 is not present in the string.
// So, Colt has used the condition

// mystery.indexOf('7') !== -1
// A new way would be using the includes methods, which tells us directly whether the given string is present in string or not.
// So, we can write the above statement as

// mystery.includes('7')
// You can read about includes operator here