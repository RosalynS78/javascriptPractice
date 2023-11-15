// events

<button onclick="myFunction();">
    CLICK HERE
</button>

// mouse
// onclick, oncontextmenu, ondblclick, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseover, onmouseout, onmouseup

// keyboard
// onkeydown, onkeypress, onkeyup

// frame
// onabort, onbeforeunload, onerror, onhashchange, onload, onpageshow, onpagehide, onresize, onscroll, onunload

// form
// onblur, onchange, onfocus, onfocusin, onfocusout, oninput, oninvalid, onreset, onsearch, onselect, onsubmit

// drag
// ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop

// clipboard
// oncopy, oncut, onpaste

// media
// onabort, oncanplay, oncanplaythrough, ondurationchange, onended, onerror, onloadeddata, onloadedmetadata, onloadstart, onpause, onplay, onplaying, onprogress, onratechange, onseeked, onseeking, onstalled, onsuspend, ontimeupdate, onvolumechange, onwaiting

// animation
// animationend, animationiteration, animationstart

// miscellaneous
// transitionend, onmessage, onmousewheel, ononline, onoffline, onpopstate, onshow, onstorage, ontoggle, onwheel, ontouchcancel, ontouchend, ontouchmove, ontouchstart

// dates
Tue Nov 14 2023 22:32:57 GMT-0600 (Central Standard Time)
var d = new Date();
1700022777017 miliseconds passed since 1970
Number(d) 
Date("2017-06-23");                 // date declaration
Date("2017");                       // is set to Jan 01
Date("2017-06-23T12:00:00-09:45");  // date - time YYYY-MM-DDTHH:MM:SSZ
Date("June 23 2017");               // long date format
Date("Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)"); // time zone

// get times
var d = new Date();
a = d.getDay();     // getting the weekday

getDate();          // day as a number (1-31)
getDay();           // weekday as a number (0-6)
getFullYear();      // four digit year (yyyy)
getHours();         // hour (0-23)
getMilliseconds();  // milliseconds (0-999)
getMinutes();       // minutes (0-59)
getMonth();         // month (0-11)
getSeconds();       // seconds (0-59)
getTime();          // milliseconds since 1970

// setting part of a date
var d = new Date();
d.setDate(d.getDate() + 7); // adds a week to a date

setDate();          // day as a number (1-31)
setFullYear();      // year (optionally month and day)
setHours();         // hour (0-23)
setMilliseconds();  // milliseconds (0-999)
setMinutes();       // minutes (0-59)
setMonth();         // month (0-11)
setSeconds();       // seconds (0-59)
setTime();          // milliseconds since 1970)

// regular expressions
var a = str.search(/CheatSheet/i);

// modifiers
// perform case-insensitive matching
// gperform a global match
// mperform multiline matching

// patterns
// \            Escape character
// \d           find a digit
// \s           find a whitespace character
// \b           find match at beginning or end of a word
// n+           contains at least one n
// n*           contains zero or more occurrences of n
// n?           contains zero or one occurrences of n
// ^            Start of string
// $            End of string
// \uxxxx       find the Unicode character
// .            Any single character
// (a|b)        a or b
// (...)        Group section
// [abc]        In range (a, b or c)
// [0-9]        any of the digits between the brackets
// [^abc]       Not in range
// \s           White space
// a?           Zero or one of a
// a*           Zero or more of a
// a*?          Zero or more, ungreedy
// a+           One or more of a
// a+?          One or more, ungreedy
// a{2}         Exactly 2 of a
// a{2,}        2 or more of a
// a{,5}        Up to 5 of a
// a{2,5}       2 to 5 of a
// a{2,5}?      2 to 5 of a, ungreedy
// [:punct:]    Any punctu­ation symbol
// [:space:]    Any space character
// [:blank:]    Space or tab
