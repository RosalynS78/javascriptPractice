# String

Strings - "Strings of Characters"

Strings are another primitive type in JavaScript. They represent text, and must be wrapped in quotes.

ex. 

(store it in a variable)

let userName = "danny";  //user variable set in a string

(can use "" or '')

ex. 

let firstName = "Ziggy"; //double quotes work

let msg = "Please do not feet the chimps!";

let animal = 'Dumbo Octopus'; //single quotes work as well

let bad = "this is wrong'; //error!

It's fine to use either single or double quotes, just be consisten in your codebase.

ex.

(this is a string!) not the same as typing the number!

'23' // **string** thats just the number 23

"23" // this is a number 23

*strings are strings of textual information*

can use both double and single quotes only when you need one inside the other

ex.

"I told her 'go away'"

'she said "I hate you"' 

both valid

## Indices & Length

Strings are Indexed

C H I C K E N

0 1 2 3 4 5 6

Each character has a corresponding index (a positional number)

(each character in a string has a corresponding number associated with it - a positional number that goes in order from the beginning of the string starting at 0)

 -we can access individual indices (individual characters) based upon the index

ex.

let animal = "Dumbo Octopus"

animal  = "Dumbo Octopus" //note spaces count 

animal [0] = "D"

ex.

let phone = "(231)345-1344)"

phone [0] = "("

-every string has a built-in magical property - called **length**

ex.

animal.length = 13 // length is a property

length - is the number of characters, no the hightest index

(the highest index is always one less because length is how we would count) - its the total number of characters.

"Dumbo Octopus" has the index of 12 because it starts counting at zero

-can add strings together called **concatenating** 

*adding two strings to get a new string*

ex. 

"lol" + "lol"  = "lollol" //concatenation

add two variables

ex.

let firstName = "River";

let lastName = "Phoenix";

firstName  + lastName = "RiverPhonenix" //new string

*note cannot change a string

ex. 

firstName = "river" // cannot update one character at a time manually - can overwrite and give it a new value

can add space 

ex.

firstName + " " +  lastName 

let fullName = firstName + " " + lastName = "River Phoenix"

## String Methods

Methods are Built - In actions we can perform with individual strings (actions)

they help us do things like:

-Searching within a string

-Replacing part of a string

-Changing the casing of a string

### Synthax

ex.

thing.method( )


#### casing

.toUpperCase( ) - uppercases string

.toLowerCase( ) - lowercases string

ex. 

let msg = 'I am King';

let yellMsg = msg.toUpperCase( ); //  'I AM KING'

let angry = 'LeAvE mE aLoNe!'; 

angry.toLowercase( ); // 'leave me alone!'

// the value i angry is unchanged

angry; // 'LeAvE mE aLoNe!'

*this is a non-destructive method, meaning the original message msg unchanged. it made a new copy for us and made it all uppercase*

ex.

let msg = "leave me alone" //original msg(value)

msg.toUpperCase

"LEAVE ME ALONE" //captured that value and returns uppercase

msg 

"leave me alone" //original value

#### trim

.trim( ) - trims off any white space at the beginning of a string or at the end

ex. 

let greeting = '   leave me alone   ';

greeting.trim( ) // 'leave me alone '

#### Chain methods together

ex.

let greeting = "  hello again!!!   ";

greeting  = "  hello again!!!  "

greeting.trim( ).toUpperCase( ) = "HELLO AGAIN!!!"

*reads left to right - greeting runs first then trims then uppercase last lowercase*

greeting.trim( ).toUpperCase( ).toLowerCase( )

### String Methods with Arguments

thing.method(arg)

Some methods accept arguments that modify their behavior. Think of them as inputs that we can pass in. We pass these arguments inside of the parentheses.

**arguments** - are just inputs that we can pass into the method to alter how they behave.

#### indexOf

*indexOf (mdn) - method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if value is not found*

indexOf - is going to give us the string index and positional number where a given argument occurs in a string.

let tvShow = 'catdog'; // (how to read) the string catdog is saved in a variable called tvShow

tvShow.indexOf('cat');  // 0 (explanation) call the indexOf the variable tvShow and pass in cat - its going to return 0 because that's where cat starts (begins)

tvShow.indexOf('dog'); // 3 (explanation) call the indexOf the variable tvShow and pass in dog - do count c-0, a - 1, t - 2, d-3 (returns 3)

tvShow.indexOf('z'); // -1 (not found) if we look for something that's now there returns - 1

ex.

"haha that is so funny!". indexOf('h')

//returns 0 - first matching index of an h is 0 (first character)

indexOf(!) // 21

indexOf($) // -1

indexOf(is) // 10

*indexOf is commonly used to test if a string contains something*

#### slice

*slice(mdn) - method extracts a section of a string and returns it as a new string, without modifying the original string.*

slice - is going to extract or slice, a portion of a string and returns it as a new string

let str = 'supercalifragilisticexpialidocious'

str.slice(0,5);  // 'super'

str.slice(5); // 'califragilisticexpialidocious'

ex.

we can pass in two numbers two indicies that we want to slice our string from

str.slice(beinIndex[, endIndex])

beginIndex - the zero-based index at which to begin extraction. If negative, it is treated as str.length + beginIndex. (ex. if beginIndex is -3 it is treated as str.length -3)

if beginIndex is greater than or queal to str.lenght, slice() returns an empty string

endIndex - (is optional)the zero-based index before which to end extraction. the character at this index will not be included.

if endIndex is omitted, slice() extracts to the end of the string. if negative, it is treated as str.legth + endIndex. (ex. if endIndex is -3 it is treated as str.lenght -3)

**return value**

a new string containing the extracted section of the string

ex. (beginIndex)

let msg = "haha that is so funny!";

msg.slice(5) // returns "that is funny!" *h-0, a-1, h-2, a-3 space -4 (starts begins at t -5)*

(beginIndex, endIndex)

msg.slice(5, )

//  to return just 'that'  

solution - msg.slice (5, 9)

to include the space

msg.slice(5, 10) // 'that '

ex. of begining index is negative (working backwards from the end)

msg.slice(-1) // '!'

msg.slice(-2) // 'y!'

msg.slice(-6) // 'funny!'

#### replace

replace - regular expression to match patterns and replace patterns instead of a specific string

let annoyingLaugh = 'teehee so funny! teehee!';

annoyingLaugh.replace(teehee',  'haha') // 'haha so funny! teehee!'

//notice that it only replaces the first instance

***variable(searchValue, replaceValue)***

ex. 

let msg = "haha that is so funny!";

msg.replace('h', 'H') // "haha that is so funny!" - it's only going to replace on the very first character

##### replaceAll

replaceAll(mdn) - method returns a new string with all matchs of pattern replaced by a replacement. the pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

//note not compatible(supported) with edge, internet explorer, opera, etc... not recognized by most browers at this point


***methods that accepts inputs - we call those inputs arguments, we pass them in and we can have multiple and separate multiples with commas.**


#### repeat

ex. 

"lol".repeat(10) // 'lollollollollollollollollollol' - makes a new string

### Template literals 

ex. (without template literals)

let product = 'Artichoke';

let price = 3.99;

price = 2.25;

let qty = 5;

"you bought " + qty + " " + product  + ".  Total is: " + price * qty

// "You bought 5 Artichoke. Total is: 11.25"

*Template literals - are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string*

-newer way (besides concatenation(has these template)) - literals are a newer syntax

ex.

(back-tick)I counted ${3  + 4} sheep(back-tick) ; // "I counted 7 sheep"

syntax - we use back - ticks not single quotes `

* the back-tick key is usually above the tab key
