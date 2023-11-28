# Conditionals

Making Decisions With Code

## If Statement

Only runs code if given condition is true

ex.

let rating = 3;

if (rating === 3) {

console.log("You are a Superstar");

}

if then () condition.

condition is simply anything that evaluates  to true or false.

so if it evaluates to true, the code in between curly braces will execute.

if false nothing happens(code will not run)

console.log only runs in this scenario if the rating variable is exactly 3.

if rating is exactly 3 do this

(binary boolean, yes or no)

## Else-If

If not the first thing, maybe this other thing

ex.

let rating = 2;

if (rating === 3) {        //false

    console.log("You are a Superstar");  //does not run

}

else if (rating === 2) {    //true

    console.log("Meets Expectations");   //then run this

}

We can add multiple else ifs

ex.

let rating = 1;

if (rating === 3) {

    console.log("You are a Superstar");

}

else if (rating === 2) {

    console.log("Meets Expectations");

}

else if (rating === 1) {

    console.log("Needs Improvement");

}

## Else

If nothing else was true, do this (otherwise) catch all

ex.

let rating = -99;

if (rating === 3) {

    console.log("You are a Superstar");

}

else if (rating === 2) {

    console.log("Meets Expectations");

}

else if (rating === 1) {

    console.log("Needs Improvement");

}

else {

    console.log("Invalid Rating");

}

if

if/else

if/else if

if/else if/else

if/else if/else if/else

# Nesting

We can nest conditionals inside conditionals

ex.

let password = "cat dog";

if (password.length >= 6) {

    if (password.indexOf(' ') !== -1) {

    console.log("Password cannot include spaces");

}

    else {

    console.log("Valid password");

}

}

else {

console.log("Password too short");

}

# Truth-y & False-y Values

* All JS values have an inherent truthyness or falsyness about them
* Falsy Values:

  * False
  * 0
  * "" (empty string)
  * null
  * undefined
  * NaN
* Everthy else is Truthy

# Logical Operators

## combining expressions

&&,  ||,  !

and, or, not

The "and" is going to run before "or";

 it has precedence over "or."


you can add parentheses to run first

ex.

const age = 100;

if ((age >= 0 && age < 5) || age >= 65) {

}


## And

Both sides must be true, for the entire thing to be true

expressions on left and on the right must be both true for the whole thing to be true

ex. 

1 <= 4 &&  'a' === 'a';  // true

9 > 10 && 9 >= 9;  //false

'abc'.length === 3 && 1+1 === 4; // false

## Or

If one side is true, the entire thing is true

(does not require both sides to be true in order for the whole thing to be true just needs one)

ex.

let age = 76;

if(age < 6  || age >=65) {

    console.log('You get in for free!');

} else {

console.log('That will be $10 please');

}

ex. 

//only one side needs to be true!

1 !== 1 || 10 === 10 // true

10/2 === 5 || null // true

0 || undefined // false

## Not

! expression returns true if expression is false

(negate an expression)

ex.

!null // true

! (0 ===0) // false

!(3 <= 4) // false

# Switch

The switch statement is another control-flow statement that can replace multiple if statements.

ex.

const day = 2;

switch (day) {

    case 1:

    console.log("Monday");

    break; // stop (keeps running without breaks)

    case 2:

    console.log("Tuesday");

    break;

    case 3:

    console.log("Wednesday");

    break;

    case 4:

    console.log("Thursday");

    break;

    case 5;

    console.log("Friday");

    break;

    case 6:

    case 7:

    console.log("weekend");

    break;

    default: // else (nothing matches)

    console.log("Invalid Number")

}
