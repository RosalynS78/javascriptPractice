# Math Object

*built in javascript - just a collection of properties and methods that have to do with math in some way (nested into Math.)*

(objects) -An object is  **a collection of properties** , and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

contains properties and methods for mathematical constants and functions

Math.PI //3.141592653589793

//rounding a number:

Math.round(4.9) //5

//absolute value:

Math.abs(-456) //456

//raises 2 to the 5th power:

Math.pow(2,5) //32

//removes decimal:

Math.floor(3.9999) / 3

## Math.floor

will take a number with a decimal and chop off that decimal (it's not rounding)

ex.

Math.floor(23.9999999) //23

## Math.ceil

ceiling or ceil - rounds up

ex.

Math.ceil(34.1) //35

# Random Numbers

random numbers - math.random( ) gives us a random decimal between 0 and 1 (non-inclusive)

ex.

Math.random( );

//0.14502435424141957

Math.random( );

//0.8937425043112937

Math.random( );

//if we want a random number between 1 and 100 where it's intergers (there's not a method to get random intergers or random init) requiers steps

we can take a number and then floor it to get a whole number

## Random Intergers

let's generate random numbers between 1 and 10

ex.

const step1 = Math.random( );

//0.5961104892810127

const step2 = step1 * 10

//5.961104892810127

const step3 = Math.floor(step2);

//5

const step4 = step3 + 1;

//6

Math.floor(Math.random( ) * 10) + 1;

ex. 1-5

Math.floor(Math.random( ) * 5); // returns random 0-4

need to shift everything up by adding one

Math.floor(Math.random( ) * 5) + 1 // returns random 1-5

ex. from 22

Math.floor(Math.random( ) * 3 + 20);

(20, 21, and 22) that's 3 numbers then  shift this upwars by 20

## Math.pow

round absolute value power - raises something to a power

ex.

Math.pow(2, 3) //8

is also the same as 

2 ** 3

//8
