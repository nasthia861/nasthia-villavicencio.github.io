// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //for loop to go through the values in the array
  for (var x = 0; x < array.length; x++){
    //each value in the array will be logged to the console
    console.log(array[x]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //loop will go through the array starting with the lst one going backwards
  for (var i = array.length - 1; i >= 0; i--){
    //each value will be logged to console
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //creating new variable for empty array we will be adding to
  var array = [];
  //using for in loop to go through the keys in an object
  for(var key in object){
    //each key will be pushed into the array
    array.push(key);
  }
  //returning array 
  return array;
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //create for in loop to go through the object
  for(var key in object){
    //printing the keys to the console
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //creating new array variable to input the values into
  var valueArray = [];
  //for in loop to go through the object
  for (var key in object){
    //pushing the values into valueArray
    valueArray.push(object[key]);
  }
  //returning valeuArray
  return valueArray;
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //using for in loop to go over object
  for(var key in object){
    //logging the values
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //create empty array to push keys with value pairs into
  var array = [];
  //for in loop to go over object
  for(var key in object){
    //if key/value pair exists, push key to array
    if(object[key]){
    array.push(key);
    }
  }
  //return the length of array
  return array.length;
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //creating array to push values into
  var array = [];
  //for in loop to loop through object
  for(var key in object){
    //pushing values into array
    array.push(object[key]);
  }
  //for loop to print values in array to console in reverse
  for(var x = array.length - 1; x >= 0; x--){
    console.log(array[x]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
