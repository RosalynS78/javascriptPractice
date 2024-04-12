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

## Array Random Access

getting data out

 put data in (order) - each element is assigned an index ( just like with strings)

***strings** - **each character has an index***

***arrays - each individual element has it's own index***

first element has an index of zero

### Arrays are indexed

ex.

doc   |   Dopey   |   Bashful   |   Grumpy   |   Sneezy   |   Sleepy   |   Happy

   0            1		   2 		      3		 4		   5		     6

Each element has a corresponding index ( counting starts at 0 )

Every element has this associated number, this index - we can use them to access a value out

ex.  ["Monday", "Tuesday", "Wednesday"]

0: "Monday"

1: "Tuesday"

2: "Wednesday"

days[0]

="Monday"

days.length

=3

days[2]

="Wednesday"

***Goes from left to right***

ex. days [1][0]

="T"

explanation - it's an array (asking for index of one from that array, which gives us Tuesday). then asking for index of Tuesday [0] which gives "T"

**Arrays are Indexed**

ex. let colors = ['red', 'orange', 'yellow', 'green'];

colors.length //4

colors[0] //'red'

colors[1]//'orange'

colors[2]//'yellow'

colors[3]//'green'

colors[4]//'undefined'

### **Modifying Arrays**

ex. let colors = ['rad', 'orange', 'yellow', 'green'];

colors[0] = 'red';

colors[2] = 'yellow';

colors[3] = 'green';

colors [4]; //undefined

colors [4] = 'blue';

//['red', 'orange', 'yellow', 'green', 'blue'\]

*note Cannot modify with strings

ex.  let firstName = "colt";

firstName[0]

"c"

firstName[0] = 'C'

firstName

*"colt" - does not change*

explanation - in an array  we can change the entire element unlike with a string we can't change particular characters.

ex.  colors[10] = 'indigo'

colors

['red', 70, 'yellow', empty x 7, 'indigo']

0: 'red'

1: 70

2: 'yellow'

10: 'indigo'

length: 11

colors[5]

undefined

colors[6]

undefined

ex. let beatles = ['paul', 'john', 'george']

beatles[3] = 'ringo';

'ringo'

beatles

(4) ["paul", "john", "george", "ringo"]

# Array Methods

We can access elements using an index. We can modify elements using an index. Seen length property.

Next - ***Built-in array methods***

Push - add to end

Pop - remove from end

Shift - remove from start

Unshift - add to start

**More Methods**

Concat - merge arrays

Includes - look for a value

IndexOf - just like string.indexOf

Join - creates a string from an array

Reverse - reverses an array

Slice - copies a portion on an array

Splice - removes/replaces elements

Sort - sorts an array

### Push & Pop (built-in method)

-allow us to add and remove from the end of an array(from the very end, not the beginning)

ex. let movieLine = ['tom', 'nancy']

1st way but tedious using index

movieLine[2] = 'pablo'

movieLine // ["tom","nancy", "pablo"]

#### **Push - adds an element from the end**

2nd way using method (push)

movieLine.push('oliver')

movieLine //["tom", "nancy", "pablo", "oliver"]

#### **Pop - removes an element from the end**

ex.  movieLine.pop()

note - pop does not require any arguements. we don't pass anything in bwtween those parentheses. its just going to give us the very last thing from the array. it returns it. it gives it to us and it removes it from the array.

//["tom", "nancy", "pablo"]

ex. let person = movieLine.pop()

person //"pablo"

movieLine // ["tom", "nancy"]

ex. let barbell = []

//undefined (empty)

barbell.push(45)

//1

barbell.push(45)

//2

barbell.push(25)

//3

barbell.push(10)

//4

barbell.push(2.5)

barbell

//(5) [45, 45, 25, 10, 2.5]

note - think of this as a stack and queue (you pull off one from the top. that is the most recently-added one. you remove from the top) - same idea we add to the end.

ex.  barbell.pop()

//2.5

barbell.pop()

//10

barbell.pop()

//25

barbell.pop()

//45

barbell.pop()

//45

### Shift & Unshift (built-in method)

#### Shift

- remove from start the beginning of an array (similar to pop but it removes from the beginning)

ex. moveLine

(5) ["tom", "nancy", "pablo", "oliver", "eva" ]

movieLine.shift()

"tom"

movieLine

(4)["nancy", "pablo", "oliver", "eva"]

ex. let nextPatron = movieLine.shift()

nextPatron

"nancy"

movieLine

(3) ["pablo", "oliver", "eva"]

#### Unshift

-add a new element to the beginning of an array.

ex. movieLine.unshift('VIP')

movieLine

(4) ["VIP", "pablo", "oliver", "eva"]

### More Methods

#### concat - merge arrays

-method is used to merge two or more arrays. this method does not change the existing arrays, but instead returns  a new array.

ex.   two seperate arrays

let cats = ['blue', 'kitty']

let dogs = ['rusty', 'wyatt']

cats.concat(dogs)

//new array ["blue", "kitty", "rusty", "wyatt"]

explanation - not updating cats - instead makes a new array that combines the two

#### includes - looke for a value

-method determines whether an array includes a certain value among its entries, returning true or false as appropriate

-example of a Boolean method (true/false)

ex. true/false

cats.inlcudes('blue')

//true

cats.inludes('Blue')

//false

explanation - if misspelled or capitalized - it's entirely different strings

#### indexOf - just like string.indexOf

-method returns the first index at which a given element can be found in the arry, or -1 is not present

ex.  indexOf *"string"*

"Blue".indexOf('B')

//0

"Blue.indexOf('e')"

//3

"Blue.indexOf('0')"

//-1

explanation - if the character's not found returns -1 (does not exist)

ex. indexOf *"array"*

comboParty

(4)["rusty", "wyatt", "blue", "kitty"]

comboParty.indexOf('rusty')

//0

#### join - creates a string from an array

#### reverse - reverses an array

-method reverses an array in place. The first array element becomes the last, and the last array element becomes the first

*-known as a destructive method (changes the original)*

ex. *reverses the original array*

comboParty.reverse

//(4) ["kitty", "blue", "wyatt", "rusty"]

explanation -  it's not just returning a reverse copy it destructs (it reorganizes and reorders and reverses)

#### slice - copies a portion on an array

-method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)  where start and end represent the index of items in that array. The original array will not be modified.

ex. .slice(start, end)

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

colors.slice(3)

//(4) ["green", "blue", "indigo", "violet"]

explanation - goes from index of 3 (green) to end (if you onlly provide a start gives you portion of the array until the end)

ex. cool colors in new array

let coolColors = colors.slice(3)

coolColors

//(4)["green", "blue", "indigo""]

colors

//(7)

['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

colors.slice(3)

ex. (start, end)

colors.slice(2,4)

//(2)["yellow", "green"]

explanation - does not stop at index of 4, not including 4 but stops up to this number *(includes the start but does not include the stop)*

ex. warm colors in new array

let warmColors = colors.slice(0, 3)

warmColors

//(3) ["red", "orange", "yellow"]

ex. *negative index*

colors.slice(-3) //gives the last 3

//[(3) ["blue", "indigo", "violet"]

explanation - give it a negative index and it will start from the end of the array.

#### splice - removes/replaces elements

-method changes the contents of an array by remving or replacing existing elements and/or adding new elements in place.

-destructive to original array (does not make a copy)

-splicing/joining

ex. syntax array.splice(start[, deleteCount[, item1 [, item2 [, ...]]]])

explanation - where to start our splice(starting index), how many things to delete, (optional) something to insert

ex. removing (indigo)//starting index (5) | how many to delete (1)

colors

['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

colors.splice(5, 1)

//["indigo"]

explanation - returns an array containg what was deleted

colors

//['red', 'orange', 'yellow', 'green', 'blue', 'violet']

ex. remove multiples

days

//(3) ["Monday", "Tuesday", "Wednesday"]

days.slice(1, 2)

//["Tuesday",  "Wednesday"]

days

//["Monday"]

ex. inserting index(1) start | delete nothing (0) | add string

colors

['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

colors.splice(1, 0, 'red-orange')

colors

//['red', 'red-orange', orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

explanation - not replacing - just inserting between

ex. multiples inserts

colors.splice(3, 0, 'yellow-green', 'forestgreen')

colors

////['red', 'red-orange', orange', 'yellow-green', 'forestgreen',  'yellow', 'green', 'blue', 'indigo', 'violet']

#### sort = sorts an array

-method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

-call array.sort() is going to convert everything into strings then  compares their UTF-16 code unit values

ex. sort

let scores = [1, 70, 100, 2500, 9, -12, 0, 34]

scores.sort()

//[-12, 0, 1, 100, 2500, 34, 70, 9]

*explanation - expected sorting by ascending and decending but this is incorrect. sorts by UTF-16 code unit values (this is not a reliable numeric sort)*

## Equals operator == and ===

The main difference between the == and === operator in javascript is that the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands.

Now, one thing we need to remember is that both **`==`**  and **`===`**  are used for comparisons and to find the degree of sameness or equality between the things we are comparing.

Both **`==`** and **`===`** returns **true** if they find equality and **false **otherwise. But there is a catch: **`==`** and **`===`** use different criteria to measure the degree of equality.
