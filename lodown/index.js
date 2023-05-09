'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: function takes in an input value and returns value unchanged.
 * 
 * @param { Any value } value: Function takes in any data type 
 * @returns  { Any value } value: Function returns input change
 */
function identity(value){
    //function should return value
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: takes in any value dataType and returns what kind of dataType the value is as a string.
 * 
 * @param {Any value} value: Function takes in any data type 
 * @returns {string} string: Function returns the type of value as a string
 */
_.typeOf = function(value){
    //if value is an array return 'array'
    if(Array.isArray(value)){
        return 'array';
        //if value is null return 'null'
    } else if(value === null){
        return 'null';
        //if value is anything else return value type using typeof
    } else {return typeof value;}
}
module.exports.typeOf = typeOf;

/**
 * first: takes an array and a number and returns a list of the first number of values in the array
 * 
 * @param {array} array: 
 * @param {number} number: 
 * @returns {array} array: 
 */
_.first = function(array, number){
    //create array to push values into
    var answer = [];
    //if array argument is an array
     if(Array.isArray(array)){
        // if number argument is a number
         if(typeof number === 'number'){
            //if number is positive
            if (number > 0){
                //if the length of the array argument is bigger than the number argument
              if(array.length > number){
                //loop through the array from the first index to 1 less than number
                    for(let x = 0; x < number; x++){
                        //push that index into the answer array
                        answer.push(array[x]);
                     }
                //if the number argument is biggger than the array length, return the whole array
                } else{return array;}
            }
        //if number argument is not a number, return the first value in the array   
         } else{return array[0];}
    //if number argument is not a number, return []
     } else{return [];}
     //return the modified answer array
    return answer;
}
module.exports.first = first;

/**
 * last: takes an array and a number and returns a list of the last number of values in the array.
 * 
 * @param {array} array: an array of values
 * @param {number} number: any positive number 
 * @returns {array} array: returns a modified array of the original array
 */
_.last = function(array, number){
    //init answer variable as an array for us to push the answer into
    var answer = [];
    //first make sure the array argument is an array
     if(Array.isArray(array)){
        //check to see that the number argument is an argument
         if(typeof number === 'number'){
            // check that the number argument is positive
            if (number > 0){
            // if the length of the array is bigger than the number argument
              if(array.length > number){
                    //for loop to go through the array pushing the number of values in the array starting from the end
                    for(let x = array.length - 1; x > array.length - number - 1; x--){
                        //unshift method will push each value to the front of the answer array
                        answer.unshift(array[x]);
                     }
                //if the length of the array is less than the number argument, return the full array
                } else{return array;}
            }
        //if the number argument is not a number return the last value in the array   
         } else{return array[array.length - 1];}
    //if the array argument is not an array return []
     } else{return [];}
     //return modified answer array
    return answer;
}
module.exports.last = last;

/**
 * filter: Function takes in an array of values and a callback function. filter iterates through every value,
 * passing each into a test function. If the result of the function is true, item is passed into an input array.
 * 
 * @param { Array } collection: Function takes in an array.
 * @param { Function } test: Function takes in a function designed to test each value in an array
 * @return { Array } collection: Function returns an output array of all items that pass the test 
 * 
 */

function filter(){

}