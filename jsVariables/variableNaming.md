# Variable Naming and Conventions

*name for variable - hard rules in javascript must follow - best conventions (best practices for developers to follow)*

### hard rules (must obey)

coming up with an identifier in javascript

let isLoggedIn(identifier)//variable

ex. 

cannot have spaces (can have numbers)

let user1 = //but cannot start off with a digit

let 1user - //error

###### An identifier is a sequence of characters in the code that identifies a variable, function, or property.

In JavaScript, identifiers are case-sensitive an can contain Unicode letters, $, _, and digits (0-9), but may not start with a digit.

An identifier differs from a string in that a string is data, while an identifier is part of the code. In JavaScript, there is no way to convert identifers to strings, but sometimes it is possible to parse strings into identifiers.

### Best Practices

*give identifiers names that are camel cased*

ex.

let loggedInUser //camel cased

let current_date //snakecased (not commonly used)

*importance of coming up with a go*od name

let n = 9; // n unknown(not specific enough/not clear enough) do not use

instead use 

let userInputNum = 9;  //(be for specific/descriptive/explains)
