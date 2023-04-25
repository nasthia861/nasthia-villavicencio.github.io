// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
/*
I.N/A
O. numbers and string(Fizz/Buzz)
C.N/A
E.print Fizz for multiples of 3, print Buzz for multiples of 5
*/



function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//for loop to print numbers form 1-100
for(var x = 1; x <= 100; x++){
    //if x is multiple of 3  and 5 print FizzBuzz
    if(x % 3 == 0 && x % 5 == 0){
        console.log('FizzBuzz');
    // if x is multiple of 3 print Fizz
    } else if(x % 3 == 0){
        console.log('Fizz');
    //if x is multiple of 5 print Buzz
    } else if(x % 5 == 0){
        console.log('Buzz');
    //else print the number
    } else {console.log(x);}
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}