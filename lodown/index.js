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
 * @param {array} collection: 
 * @param {number} number: 
 * @returns {array} collection: 
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
 * @param {array} collection: an array of values
 * @param {number} number: any positive number 
 * @returns {array} collection: returns a modified array of the original array
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
 * @param { Array } collection: function takes in an array with any value 
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
 * @param {Array} collection: takes in an array to look through
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
 * @param {array} collection: takes in an array as the parameter 
 * @returns {array} collection: returns new array of the original array modified.
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

/**
 * pluck: Function takes in an array and a property to search for. Once the property is found it will be added to a new
 * array. once all the matching properties have been found, the modified new array will be returned.
 * 
 * @param {array} collection: array to search over
 * @param {property} value: a key value we are looking for in the array
 * @returns {array} collection: all the elements that were found with the property key
 */
_.pluck = function(array, property){
    //init newArray array to push into
        let newArray = []
        //use map function to access all the objects in the array
        _.map(array, function(e, i, c){
            //use map function again to access all the properties inside the objects
            _.map(array[i], function(v, k, c){
                //if any key inside the objects matches our property, it will get pushed into the empty array
                if(k === property){
                    newArray.push(v);
                }
            })
        })//return the modified array
        return newArray;
}
module.exports.pluck = pluck;

/**
 * every: the function passes a collection through a function and returns true only if all the properties pass, else returns
 * false.
 * 
 * @param {array or object} collection: the data we are running through the function to make sure it passes
 * @param {function} action: a test for the collection
 * @returns {boolean} boolean: true if all the properties in the collection pass the function, false if any fail
 */
_.every = function(collection, funk){
    //if a function was provided
    if(funk !== undefined){
        //create for loop to go through collection if it is an array
        for(let x = 0; x < collection.length; x++){
            //if any element called returns false, return false
            if(!funk(collection[x], x, collection)){
                return false;
            }
        }
        //create for in loop to go through collection if it is an object
        for(let key in collection){
            //if any element called returns false, return false
            if(!funk(collection[key], key, collection)){
                return false;
            }
        }
        //if the for loops fail and every element passes the function call, return true
        return true;

    //if function is not provided, return true if every element is truthy
    } else { 
        //for loop to go through collection
        for(let x = 0; x < collection.length; x++){
            if(!collection[x]){
                return false;
            //if elements are not truthy, return false
            }
        }
        return true;
    }
}
module.exports.every = every;

/**
 * some: function tests the collection through a function. If any of the properties pass, it will return true. If they all
 * fail, it will return false.
 * 
 * @param {array or object} collection: the data we are running through the function to check if it passes
 * @param {function} action: a test for the collection
 * @returns {boolean} boolean: true if any of the properties in the collection pass the function, false if the all fail
 */
_.some = function(collection, funk){
    //if a function was provided
    if(funk !== undefined){
        //for loop to go through collection if it is an array
        for(let x = 0; x < collection.length; x++){
            //if one element called returns true, return true
            if(funk(collection[x], x, collection)){
                return true;
            }
        }
        //for loop to go through collection if it is an object
        for(let key in collection){
            //if an element called returns true, return true
            if(funk(collection[key], key, collection)){
                return true;
            }
        }
        //if all the four loops fail and none of the elements pass the function, return false
        return false;
    //if function is not provided, return true if every element is truthy
    } else { 
        //for loop to go through collection
        for(let x = 0; x < collection.length; x++){
            if(collection[x]){
                return true;
            //if elements are not truthy, return false
            } 
        }
        return false;
    }
}
module.exports.some = some;

/**
 * reduce: function runs a collection through a function and passes all the passing values into a seed. returns the final
 * value of the seed. 
 * 
 * @param {array} collection: the array we will be running through
 * @param {function} action: a test to run the collection through
 * @param {seed} starting value: starting value to add the passing values into
 * @returns {collection} collection: the final form of the starting seed after the collection has passes through the function
 */
_.reduce = function(array, funk, seed){
    let result;
    //determine if seed was not passed in
    if(seed === undefined){
        //result will be set to the first value in the array
        result = array[0];
        for(let i = 1; i < array.length; i++){
            //reassign result to func invocation, this will keep changing as the loop progresses
            result  = funk(result, array[i], i, array);
            //.             ?       item.   index collection
        }
    //if we were given a seed argument
    } else {
        //result will start off by equaling seed
        result = seed;
        for(let i = 0; i < array.length; i++){
            //reassign result to func invocation, this will keep changing as the loop progresses
            result = funk(result, array[i], i, array);
        }
    }
    //return the final value of result
    return result;
}
module.exports.reduce = reduce;

/**
 * extend: the function takes an object and modifies it with other objects by either adding new key/values or replacing
 * the ones that it already has and then returning the modified object.
 * 
 * @param {object} collection: starting object to modify 
 * @param  {...object} collections: the additional object we will be adding to or replacing the original object with
 * @returns {object} collection: the modified object
 */
_.extend = function(object1, ...objects){
    //object will get reassigned using the Object.assign property. replacing the target first argument with elements in the other arguments.
    Object.assign(object1, ...objects);
    //return the modified object
    return object1;
}
module.exports.extend = extend;