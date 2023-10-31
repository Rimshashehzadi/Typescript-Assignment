"use strict";
let myname = "Rimsha Amin";
console.log("Lowercase:", myname.toLowerCase());
console.log("Upercase:", myname.toUpperCase());
//title case
let first = myname.charAt(0); //index 0 py character add ho jay
//console.log(first);
let toUpper = first.toUpperCase();
//console.log(toUpper);
//for remaining string
let rem = myname.slice(1);
//console.log(rem)
let final = first + rem;
console.log(final);
