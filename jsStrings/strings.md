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

-can add strings together
