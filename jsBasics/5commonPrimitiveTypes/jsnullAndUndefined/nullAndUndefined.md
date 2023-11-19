# Null & Undefined

-Null

- "Intentional absence of any value"
- Must be assigned

-Undefined

- Variables that do not have an assigned value are undefined

Both of these are primitive values - seem like they have a negative connotation like they refer to nothingness to a problem 

***Undefined vs Null***

*Undefined means the variable has been declared, but its value has not been assigned.** **Null means an empty value or a blank value. The typeof() operator returns undefined for an undefined variable. The typeof() operator returns the type as an object for a variable whose value is assigned as null.***

explanation -

undefined - it does not have a defined value (think of it as javascript's way of saying "i don't know or i don't know what you want - i don't know the value") 

vs

null - it is an intentional lack of value and this something that we assign. we can make a variabe and set it to null

## Null

*just a concept of nothing - we could set it to false or zero set it to null (there is nothing here)*

//no one is logged in yet...

let loggedInUser = null; // value is explicitly nothing

//a user logs in...

loggedInUser = 'Alan Rickman';

## Undefined

just a concept that just means something not being there, not being defined - is not something that we set ourselves or that we use

another way of explanation - **null** is something you won't run into really often or at all it is something you may set as a value for a variable whereas **undefined** is something that you will into pretty frequently when working with methods and writing functions - returns undefined
