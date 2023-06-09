// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};//variable _ declared and assigned an empty object 


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    //function should return value
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
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

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
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

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
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

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
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

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
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


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    //if collection is array
    if(Array.isArray(collection)){
        //iterate through collection
        for(let x = 0; x < collection.length; x++){
            //call the function on each property in collection
            func(collection[x], x, collection);
        }
    } else { 
        //iterate through object keys
        for(var key in collection){
            func(collection[key], key, collection);
        }
    }
}



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
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


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
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


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
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


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
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



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
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

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
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


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
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


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
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


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
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


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1, ...objects){
    //object will get reassigned using the Object.assign property. replacing the target first argument with elements in the other arguments.
    Object.assign(object1, ...objects);
    //return the modified object
    return object1;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
