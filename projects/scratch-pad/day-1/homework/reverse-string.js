// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
/*
I. string
O. new string(old string reversed)
C. N/A
E. N/A
*/

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //create new string variable for our function to post into
    var reverse = ''
    //for loop to go through each character in the string in reverse
    for (var i = input.length - 1; i >= 0; i--){
      //each loop will add the character to the new string value
      reverse += input[i];
    }
    //returning the new string variable
    return reverse;
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}