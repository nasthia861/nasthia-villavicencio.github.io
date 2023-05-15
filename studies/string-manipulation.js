/**
 * STRING MANIPULATION:
 * 0. String values are data types that hold characters to form a word value. We can manipulate those values using string
 * manipulation. 
 * 
 * 1. With Operators
 * We can use the arithmetic operator + to blend multiple strings together. 
 * We can also use the assignment operator += to do the same thing and concatenate them.
 * 
 * 2. With String Methods
 * There are countless String Methods that can be used to manipulate strings or check string values.
 * some of the most popular ones include:
 * .length: returns the length of the string
 * .slice, .substring, and .substr: are all used to extract a part of a string
 * .replace, replaceAll: replaces a part of the string by looking for the first argument and replacing it with the second 
 * argument
 * .toUpperCase, toLowerCase: changes the casing of the whole string.
 * .concat: works like the + operator to join to strings into one.
 * .split: will turn a string into an array of parts of the string.
 */

//1.With Operators//
let firstName = 'Nasthia';
let lastName = 'Villavicencio';
let fullName = firstName + ' ' + lastName;
console.log(fullName)//'Nasthia Villavicencio

let plural = 's';
firstName += plural;
console.log(firstName) //'Nasthias'

//2.With String Methods
var show = 'The Office';
//.length
console.log(show.length);//10

//.slice, .substring, substr
console.log(show.slice(0, 3));//'The'
console.log(show.substring(4));//'Office'
//without a second argument, these methods will return the rest of the string.
console.log(show.substr(4,6));//'Office'
//first argument: what index to start the split, second argument: specifies the length of the extracted part

//.replace, .replaceAll
console.log(show.replace('The', 'Our'))//'Our Office'
//replaceAll does the same thing except it replaces all the values that match the first argument

//.toUpperCase, .toLowerCase
console.log(show.toUpperCase());//'THE OFFICE'
console.log(show.toLowerCase());//'the office'

//.concat
console.log(show.concat(' is the best'));//'The Office is the best'

//.split
console.log(show.split(' '));//['The', 'Office']
