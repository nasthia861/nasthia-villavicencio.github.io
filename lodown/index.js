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
 * indexOf: Function takes an array and a value we are searching for in that array. If the value exists in the array
 * it will return the index it is in. If the value is not in the array, it will return -1.
 * 
 * @param { Array } array: function takes in an array with any value 
 * @param { Value } value: function takes in any value to check for
 * @returns { number } number: returns the index number in the array that the value is located in
 */
_.indexOf = function(array, value){
    //for loop to go through array
    for(let i = 0; i < array.length; i++){
        //if value is in the array, return the index
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Function takes in 2 parameters an array to comb through and a value we are searching for. If the value
 * is located in the array, it returns true. If the value is not in the array, it returns false.
 * 
 * @param {Array} array: takes in an array to look through
 * @param {value} value: takes in a value to search for
 * @returns {boolean} boolean: returns true if the value is located in the array and false if it does not.
 */
_.contains = function(array, value){
    //for loop tp go through array
    for(let i = 0; i < array.length; i++){
        //ternary operator
        //if value is in the array, return true.
        if(array[i] === value){
          return true;
        }
    }
    //if loop fails return false
    return false;
}
moudule.exports.contains = contains;

/**
 * unique: function takes an array and loops it through its index to return a new array with no duplicate values.
 * 
 * @param {array} array: takes in an array as the parameter 
 * @returns {array} array: returns new array of the original array modified.
 */
_.unique = function(array){
    //init new array variable to push into
    let newArray = [];
    //for loop to go through array
    for(let i = 0; i < array.length; i++){
    //if indexOf returns -1, push into new Array
        if(_.indexOf(newArray, array[i]) === -1){
            newArray.push(array[i])
        } 
    }
    return newArray;
}
module.exports.unique = unique;

/**
 * filter: Function takes in an array of values and a callback function. filter iterates through every value,
 * passing each into a test function. If the result of the function is true, item is passed into an input array.
 * 
 * @param { Array } collection: Function takes in an array.
 * @param { Function } test: Function takes in a function designed to test each value in an array
 * @return { Array } collection: Function returns an output array of all items that pass the test 
 * 
 */
_.filter = function(array, funk){
    //init new array to push passing elements into
    var newArray = [];
    //for loop to go through array for each ELEMENT
    for(let x = 0; x < array.length; x++){
        //if the element passing through the function is true, push into new array
        if(funk(array[x], x, array)){
            newArray.push(array[x]);
        }
    }
    //return new array
    return newArray;
}
module.exports.filter = filter;

/**
 * reject: Function takes in an array of values and a callback function. filter iterates through every value,
 * passing each into a test function. If the result of the function is false, item is passed into an input array.
 * 
 * 
 * @param { Array } collection: Function takes in an array.
 * @param { Function } test: Function takes in a function designed to test each value in an array
 * @return { Array } collection: Function returns an output array of all items that fail the test 
 */
_.reject = function(array, funk){
    //init new array to push failing elements into
    var failArray = [];
    //for loop to go through array for each ELEMENT
    for(let x = 0; x < array.length; x++){
        //if the element passing through the function is false, push into new array
        if(!funk(array[x], x, array)){
            failArray.push(array[x]);
        }
    }
    //return new array
    return failArray;
}
module.exports.reject = reject;

/**
 * partition: partition takes an array and passes it through the function. then it returns one array with two arrays
 * inside of it. The values that passed the test in one, and the values that failed the test in the other one.
 * 
 * @param {array} collection: Function takes in an array.
 * @param {function} test: Function takes in a function designed to test each value in an array
 * @returns {array} collection: returns an array with two arrays, one that passes the function, and the other one fails
 */
_.partition = function(array, funk){
    //init variable to push both function arrays into
        var bothArrays = [];
    //push array that passes filter function into empty array
        bothArrays.push(_.filter(array, funk));
    //push array that passes reject function into empty array
        bothArrays.push(_.reject(array, funk));
    //return modified array
        return bothArrays;
}
module.exports.partition = partition;

/**
 * map: Designed to loop over a collection, Array or Object, and applies the action Function to each value in the 
 * collection, then pushes the modified values into a new Array to return.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @returns {array} collection: returns new array that has all the modified values
 */
_.map = function(collection, funk){
    //init new array
    var newArray = [];
    if(Array.isArray(collection)){
        //iterate through collection
        for(let x = 0; x < collection.length; x++){
            //call the function on each property in collection
            newArray.push(funk(collection[x], x, collection));
        }
    } else { 
        //iterate through object keys
        for(var key in collection){
            newArray.push(funk(collection[key], key, collection));
        }
    }
    return newArray;
}
module.exports.map = map;