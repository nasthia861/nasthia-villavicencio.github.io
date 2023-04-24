// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    //return input string
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //output is a string
    //return string using toLowerCase method
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //output is string
    //using toUpperCase method to return new string
    return string.toUpperCase();



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
//output will be new string
//using replace method to replace split with dash string into two
    //creating newString variable
    var newString = '';
    //using toLowerCase method to lower case the string and replaceAll method to replace spaces with dashes
    newString = string.replaceAll(' ', '-').toLowerCase();
    //returning newString value
    return newString;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
//ouput will be boolean
  //make newString equal a lower case version of string variable using method 
  var newString = string.toLowerCase();
  //make nChar equal a lower case version of char variable using method 
  var nChar = char.toLowerCase();
    if(newString[0] == nChar){
        return true;
    } else {return false;}
    

    // YOUR CODE ABOVE HERE //
}
console.log(beginsWith('Max', 'm')); // => true;
console.log(beginsWith('Max', 'z')); // => false;

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
//ouput will be boolean
  //make newString equal a lower case version of string variable using method 
  var newString = string.toLowerCase();
  //make nChar equal a lower case version of char variable using method 
  var nChar = char.toLowerCase();
  //using if statement to check that the last value in newString is equal to nChar
    if(newString[newString.length - 1] == nChar){
        return true;
    } else {return false;}
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//output will be string
//using the + operator to concatenate the two strings
    return stringOne + stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //output is one string value
     //creating newString variable to add all the string values in the array into one
    var newString = '';
    //creating for loop method to go through values in array args
    for(var i = 0; i < args.length; i++){
        //adding each value in the array to our new string variable
       newString += args[i];
    }
    //returning newString
  return newString;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//output will be a string value which will be one of our parameters
//edge cases will be if the strings length are the same
    //if stringOne > stringTwo return stringOne
    if(stringOne.length > stringTwo.length){
        return stringOne;
    //if stringTwo > stringOne return stringTwo
    } else if (stringTwo.length > stringOne.length){
        return stringTwo;
    } else {
        return 'Both strings are equal in length';
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
//input is two strings
//output is a number
//edge case is if the parameters are equal 
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //using localeCompare method to compare the strings in alphabetical order
    //localeCompare returns a number
    //if stringOne > stringTwo return 1
   if (stringOne.localeCompare(stringTwo) === -1){
    return 1;
    //if stringTwo > stringOne return -1
   } else if (stringTwo.localeCompare(stringOne)){
    return -1;
    //if stringOne = stringTwo return 0
   } else {return 0;}


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //using localeCompare method to compare the strings in alphabetical order
    //localeCompare returns a number
    //if stringOne > stringTwo return -1
    if (stringOne.localeCompare(stringTwo) === -1){
        return -1;
        //if stringTwo > stringOne return 1
       } else if (stringTwo.localeCompare(stringOne)){
        return 1;
        //if stringOne = stringTwo return 0
       } else {return 0;}
    
    
        // YOUR CODE ABOVE HERE //
    }


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
