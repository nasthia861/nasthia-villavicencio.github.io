// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //init output array
    var output = [];
    // using while loop to go through all the numbers in between the arguments
    //init count variable
    var count;
    //if start < end, count will start at start and keep going up till it reaches end
    if(start < end){
        count = start;
        while(count <= end){
            //each count will get pushed to output till the loop reaches end
            output.push(count);
            count++;
        }
    }
    //if end < start, count will start at start and keep going down till it reaches end
    if(end < start){
        count = start;
        while(count >= end){
            //each count will get pushed into outpost till it reacehs end
            output.push(count);
            count--;
        }
    }
    return output;
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
