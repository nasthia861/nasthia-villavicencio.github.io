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