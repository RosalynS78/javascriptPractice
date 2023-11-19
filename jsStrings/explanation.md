In JavaScript we only write a value in the parentheses if we need to process that value. Sometimes the purpose of the function is to perform a task rather then process some kind of input.

Examples:

```
var sayHello = function() {
console.log("Hello there!";
};
```

The purpose of the above function is to display “Hello there!”. There is nothing to add to it so when we call the function to action, we call it like this: `sayHello();`

Now the next function needs an input. Its purpose it to add 3 to whatever number we feed it:

```
var addThree = function(number){
console.log(number + 3);
};
```

Now I want to add 7 to 3 and I call the function: `addThree(7);`

---

The next example may confuse you if you come from a different language that does not allow this to happen.

In JavaScript functions have access to outer variables and therefore they can be used to modify the outer variable:

```
var x = 10;

var changeMe = function(){
x = 77;
};
```

So far x is 10 but after I call the function, x will become 77:

`changeMe();`

Again, there were no parameters passed in. The function had specific instructions to change x to 77. This is only possible because the function has access to the outer variable like if it was its own.

---

`Going back to your example...`

Firs of all I would change the input x to something else so it makes more sense. Like for example: y

 **var x = true; var soloLoop = function(** `y`**){**  **//Your code goes here! while (** `y` **=== true) { console.log (“Looped once!”);** `y` **= false** **} };**

Now call it: `soloLoop(x);`

The reason why I changed x to y in the function is to show that that variable has nothing to do with the outer variable x. The names were just a coincidence.

When we call the function the value of x is copied by variable y and y becomes `true`.


A **parameter** of a function is an independent variable. It belongs to the function and it has no contact with the outside world. So when we want to pass the value of x to the function, y takes a picture of the value because it can’t touch that value. It is like x is on one side of the street and y is on the other side. They can’t touch each other. In reality, x in in one area of the memory called the stack and y is on another area of the memory called the heap. When you call the function, example: soloLoop(x); The y takes a picture of the value of x and uses its own value which is a facsimile of the value of x. It happens internally, we just need to know that it happens. There is no connection between parameters and outside variables. They can have the same name because they live in different worlds. This is important to understand in order to figure out the best way to program a function.
