# Arrays Basics - Creating and Updating

Data structure - is a collection of data

have different variables (but not connected in any way) - seperate variables

represent members of the beatles - four different variables

***Arrays - are data structure that allows us to store multiple values together in one variable.***

ex.

const bassist = 'Paul';

Data structures, specifically arrays - allow us to group data together

we could store four different strings

ex. Paul, John, Ring, George

can store those four strings in a single array (single collection)

## Ordered Collection of values

* List of comments on IG post
* Collection of levels in a game
* Songs in a playlist

Main concept is just a bunch of slots - and there's an order (two key concepts for an array)

1. It's a collection of values
2. it is an ordered collection of values

## Creating Arrays

// To make an empty array (assigning a variable to an array)
let students = [];

//An array of strings
let colors = ['red', 'orange', 'yellow'];

//An array of numbers
let lottoNums = [19, 22, 56, 12, 51];

//A mixed array
let stuff = [true, 68, 'cat', null];

//string [index] (using square brackets to access a character)
ex. bassist [0]
//"character"
"P"

//colors = empty array
ex. let colors = [];

(devtools)
ex. typeof colors
"object"

ex. let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days
(5) ["Monday", 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
0: "Monday"
1: "Tuesday"
2: "Wednesday"
3: "Thursday"
4: "Friday"
length: 5
[[Protyotype]]: Array(0)

explanation - 5 elements - 5 values (a container - an array) it has length. So just like a string has a length (days.length)
"5"
[].length
"0" (empty array)

# Push & Pop (built-in method)

# Shift & Unshift (built-in method)

# Concat, IndexOf

# Slice & Splice

# Multi Dimensional Arrays
