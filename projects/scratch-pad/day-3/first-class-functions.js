// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
//create function with new filter parameter
      return function(filter){
        //if filter is greater than base, return true. if not, return false
        if(filter > base){
          return true;
        } else {return false;}
      };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return function that takes in filter parameter
    return function(filter){
//if filter is less than base return true, else return false
        if(filter < base){
            return true;
        } else {return false;}
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //return function that takes in word parameter
    return function check(word){
        //if index zero in word is equal to our startsWith parameter, return true. else, return false
        //also use toUpperCase method and toLowerCase method to make sure its not case sensitive
        if(word[0] == startsWith.toUpperCase() || word[0] == startsWith.toLowerCase()){
            return true;
        } else {return false;}
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
 // YOUR CODE BELOW HERE //
    //return function that takes in word parameter
    return function check(word){
        //if the last index in word is equal to our endsWith parameter, return true. else, return false
        //also use toUpperCase method and toLowerCase method to make sure its not case sensitive
        if(word[word.length - 1] == endsWith.toUpperCase() || word[word.length - 1] == endsWith.toLowerCase()){
            return true;
        } else {return false;}
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //init collection array
    var collection = [];
    //making for loop to go through strings array
    for(var x = 0; x < strings.length; x++){
        //pass each string through the modify function and push to collection array
            collection.push(modify(strings[x]));
        }
    return collection;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //creating while loop to go through strings array
    //count will go up after each test
    var count = 0;
  //i will go up after each passing test
    var i = 0;
    while (count < strings.length){
    //if the string passes the test, i will increase by 1
        if(test(strings[i])){
        i ++;
    }
    //after each loop count will increase
        count++;
  }
  //once the loop has gone through all the string on the array
  //if all the tests passed, return true, if they did not ALL pass, return false
  if (i === strings.length){
    return true;
  } else {return false;}

    
  
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
