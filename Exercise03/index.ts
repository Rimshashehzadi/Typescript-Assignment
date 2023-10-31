let myname:string = "Rimsha Amin";
console.log("Lowercase:", myname.toLowerCase());
console.log("Upercase:", myname.toUpperCase());
//title case
let first:string = myname.charAt(0); //index 0 py character add ho jay
//console.log(first);
let toUpper:string = first.toUpperCase();
//console.log(toUpper);
//for remaining string
let rem:string = myname.slice(1);
//console.log(rem)
let final:string = first+rem;
console.log(final)
