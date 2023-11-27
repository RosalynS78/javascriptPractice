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
