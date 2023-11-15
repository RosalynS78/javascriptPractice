// Basics

// include external JS file
<script src="filename.js"></script> 

// functions
function addNumbers (a, b) {
    return a + b;
}

// comments
/*multi line comment*/
// one line

// logging/print
console.log(a);
document.write(a);
alert(a);
confirm("Really");
prompt("Your age?", "0");

// Data types
var age = 18;                                 //number
var name = "Jane";                            //string  
var name = {first:"Jane", last:"Doe"};        //object
var truth = false;                            //boolean
var sheets = ["HTML", "CSS", "JS"];           //array
var a; typeof a;                              //undefined
var a = null;                                 //value null

// Objects
var student = {                                         //object name
    firstName: "Jane",                                  //list of properties and values
    lastName: "Doe",                                    
    age: 18,
    height: 170,
    fullName : function () {                            //object function
        return this.firstName = " " + this. lastName;
    }
};

student.age = 19;                                       //setting value
student[age]++;                                         //incrementing
name = student.fullName();                              //call object function

// If - Else Statements
if ((age >= 14) && (age < 19)) {   //logical condition
    status = "Eligible.";          //executed if condition is true
} else {                           //else block is optional
    status = "Not eligible.";      //executed if condition is false
}

// Switch Statement
switch (new Date().getDay()) {          //input is current day
    case 6:                             //if (day == 6)
        text = "Saturday";
        break;
    case 0:                             //if (day == 0)            
        text = "Sunday";
        break;
    default:                            //else    
        text = "Whatever";
}

// Javascript Loops

// for loop
for (var i = 0; i < 10; i++) {
    document.write(i + "br />");
}

var sum = 0;
for (var i = 0; i < a.length; i++) {
sum + = a[i];
}               // parsing an array
html = "";
for (var i of custOrder) {
html += "<li>" + i + "</li>";
}



// while loop
var i = 1;                         //initialize
while (i < 100) {                 //enters the cycle if statement is true
    i *=2;                       //increment to avoid infinite loop
    document.write(i + ", ");   //output
}

// do-while loop
var i = 1;                         //initialize
do {                               //enters cycle at least once
    i *=2;                         //increment to avoid infinite loop
    document.write(i + ", ");      //output
} while (i <100)                   //repeats cycle if statement is true at the end


// break
for (var i = 0; i < 10; i ++) {     
    if (i ==) { break ;}               //stops and exits the cycle
    document.write(i + " , ");         //last output number is 4
}

// continue
for (var i = 0; i < 10; i++) {
    (i == 5) { continue ;}              //skips the rest of the cycle
    document.write(i + " , ");          //skips 5
}

// Javascript Strings
var abc = "abcdefghijklmnopqrstuvwxyz"; 
var esc = 'I don\'t \n know';           //\n new line
var len = abc.length;                   //string length
abc.indexOf("lmno");                    //find substring
abc.lastIndexOf("lmno");                //last substring
abc.slice(3, 6);                        //cuts out "def" ,
abc.replace(abc, "123");                //find and replace
abc.UpperCase();                        //convert to upper case
abc.toLowerCase();                      //convert to lower case
abc.concat(" ", str2);                  //abc + " " + str2
abc.charAt(2);                 //character at index: "c"
abc[2];                        //unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);             //character code at index: "c" -> 99
abc.split(",");                //splitting a string on commas
abc.split("");                 //splitting on characters
128.toString(16);              //number to hex(16), octal or binary

// JavaScript Math     
var pi = Math.PI;                   //3.141592653589793
Math.round(4.4);                    //= 4 - rounded
Math.round(4.5);                    //= 5
Math.pow(2,8);                      //=256 - 2 to the power of 8
Math.sqrt(49);                      //= 7 - square root
Math.abs(-3.14);                    //= 3.14 - absolute, positive value
Math.ceil(3.14);                    //= 4 - rounded up
Math.floor(3.99);                   //= 3 - rounded down
Math.sin(0);                        //= 0 - sine
Math.cos(Math.PI);                  //OTHERS: tan, atan, asin, acos,
Math.min(0, 3, -2, 2);              //= -2 - the lowest value
Math.max(0, 3, -2, 2);              //= 3 - the highest value
Math.log(1);                        //= 0 natural logarithm
Math.exp(1);                        //= 2.7182pow(E,x)
Math.random();                      //random number between 0 and 1
Math.floor(Math.random() * 5) + 1;  //random integer, from 1 to 5

// constants like Math.PI
// E, PI, SQRT2, SQRT1_2, LN2, LN10, LOG2E, Log10E


// JavaScript Numbers
var pi = 3.141;
pi.toFixed(0);             //returns 3
pi.tofixed(2);             //returns 3.14
pi.toPrecision(2)          //returns 3.1
pi.valueOf                 //returns number
Number(true);              //converts to number
Number(new Date());        //number of milliseconds since 1970
parseInt("3 months");      //returns the first number: 3
parseFloat("3.5 days");    //returns 3.5
Number.MAX_VALUE           //largest possible JS number
Number.MIN_VALUE           //smallest possible JS number
Number.NEGATIVE_INFINITY   //-Infinity
Number.POSITIVE_INFINITY   //Infinity


// Variables
var a;                          // variable
var b = "init";                 // string
var c = "Hi" + " " + "Joe";     // = "Hi Joe"
var d = 1 + 2 + "3";            // = "33"
var e = [2,3,5,8];              // array
var f = false;                  // boolean
var g = /()/;                   // RegEx
var h = function(){};           // function object
const PI = 3.14;                // constant
var a = 1, b = 2, c = a + b;    // one line
let z = 'zzz';                  // block scope local variable

// Strict mode
"use strict";   // Use strict mode to write secure code
x = 1;          // Throws an error because variable is not declared

// Values
false, true                     // boolean
18, 3.14, 0b10011, 0xF6, NaN    // number
"flower", 'John'                // string
undefined, null , Infinity      // special

// Operators
a = b + c - d;      // addition, substraction
a = b * (c / d);    // multiplication, division
x = 100 % 48;       // modulo. 100 / 48 remainder = 4
a++; b--;           // postfix increment and decrement

// Bitwise operators

&	AND 	 5 & 1 (0101 & 0001)	1 (1)
|	OR 	 5 | 1 (0101 | 0001)	5 (101)
~	NOT 	 ~ 5 (~0101)	10 (1010)
^	XOR 	 5 ^ 1 (0101 ^ 0001)	4 (100)
<<	left shift 	 5 << 1 (0101 << 1)	10 (1010)
>>	right shift 	 5 >> 1 (0101 >> 1)	2 (10)
>>>	zero fill right shift 	 5 >>> 1 (0101 >>> 1)	2 (10)

// Arithmetic
a * (b + c)         // grouping
person.age          // member
person[age]         // member
!(a == b)           // logical not
a != b              // not equal
typeof a            // type (number, object, function...)
x << 2  x >> 3      // minary shifting
a = b               // assignment
a == b              // equals
a != b              // unequal
a === b             // strict equal
a !== b             // strict unequal
a < b   a > b       // less and greater than
a <= b  a >= b      // less or equal, greater or eq
a += b              // a = a + b (works with - * %...)
a && b              // logical and
a || b              // logical or

// Arrays
var dogs = ["Bulldog", "Beagle", "Labrador"]; 
var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

alert(dogs[1]);             // access value at index, first item being [0]
dogs[0] = "Bull Terier";    // change the first item

for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
console.log(dogs[i]);
}

// methods
dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
dogs.pop();                             // remove last element
dogs.push("Chihuahua");                 // add new element to the end
dogs[dogs.length] = "Chihuahua";        // the same as push
dogs.shift();                           // remove first element
dogs.unshift("Chihuahua");              // add new element to the beginning
delete dogs[0];                         // change element to undefined (not recommended)
dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)
dogs.slice(1,4);                        // elements from [1] to [4-1]
dogs.sort();                            // sort string alphabetically
dogs.reverse();                         // sort string in descending order
x.sort(function(a, b){return a - b});   // numeric sort
x.sort(function(a, b){return b - a});   // numeric descending sort
highest = x[0];                         // first item in sorted array is the lowest (or highest) value
x.sort(function(a, b){return 0.5 - Math.random()});     // random order sort

// concat, copyWithin, every, fill, filter, find, findIndex, forEach, indexOf, isArray, join, lastIndexOf, map, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, toString, unshift, valueOf