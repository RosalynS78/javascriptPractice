// Global Functions
eval();                     // executes a string as if it was script code
String(23);                 // return string from number
(23).toString();            // return string from number
Number("23");               // return number from string
decodeURI(enc);             // decode URI. Result: "my page.asp"
encodeURI(uri);             // encode URI. Result: "my%page.asp"
decodeURIComponent(enc);    // decode a URI component
encodeURIComponent(uri);    // encode a URI component
isFinite();                 // is variable a finite, legal number
isNaN();                    // is variable an illegal number
parseFloat();               // returns floating point number of string
parseInt();                 // parses a string and returns an integer

// json 
var str = '{"names":[' +                    // crate JSON object
'{"first":"Hakuna","lastN":"Matata" },' +
'{"first":"Jane","lastN":"Doe" },' +
'{"first":"Air","last":"Jordan" }]}';
obj = JSON.parse(str);                      // parse
document.write(obj.names[1].first);         // access

// send
var myObj = { "name":"Jane", "age":18, "city":"Chicago" };  // create object
var myJSON = JSON.stringify(myObj);                         // stringify
window.location = "demo.php?x=" + myJSON;      

// storing and retrieving
myObj = { "name":"Jane", "age":18, "city":"Chicago" };
myJSON = JSON.stringify(myObj);                 // storing data
localStorage.setItem("testJSON", myJSON);   
text = localStorage.getItem("testJSON");        // retrieving data 
obj = JSON.parse(text);
document.write(obj.name);

// promises
function sum (a, b) {
    return Promise(function (resolve, reject) { 
     setTimeout(function () {                                       // send the response after 1 second
       if (typeof a !== "number" || typeof b !== "number") {        // testing input types
         return reject(new TypeError("Inputs must be numbers"));
       }
       resolve(a + b);
     }, 1000);
    });
    }
    var myPromise = sum(10, 5);
    myPromsise.then(function (result) {
    document.write(" 10 + 5: ", result);
    return sum(null, "foo");              // Invalid data and return another promise
    }).then(function () {                   // Won't be called because of the error
    }).catch(function (err) {               // The catch handler is called instead, after another second
    console.error(err);                   // => Please provide two numbers to sum.
    });

    // states
    // pending, fulfilled, rejected

    // properties
    // Promise.length, Promise.prototype

    // methods
    // Promise.all(iterable), Promise.race(iterable), Promise.reject(reason), Promise.resolve(value)

// errors
    try {                           // block of code to try
        undefinedFunction();
        }
        catch(err) {                    // block to handle errors
        console.log(err.message);
        }

// throw error
throw "My error message";    // throw a text

// input validation
var x = document.getElementById("mynum").value; // get input value
try { 
if(x == "")  throw "empty";                 // error cases
if(isNaN(x)) throw "not a number";
x = Number(x);
if(x > 10)   throw "too high";
}
catch(err) {                                    // if there's an error
document.write("Input is " + err);          // output error
console.error(err);                         // write the error in console
}
finally {
document.write("</br />Done");              // executed regardless of the try / catch result
}

// error names values
// RangeErrorA number is "out of range"
// ReferenceErrorAn illegal reference has occurred
// SyntaxErrorA syntax error has occurred
// TypeErrorA type error has occurred
// URIErrorAn encodeURI() error has occurred