/**
 * LOOPS:
 * 
 * 0. Loops are used to execute a block of code multiple times. There are for loops, for in loops, and while loops.
 * A loop will keep running through the code till a condition is met, this sometimes causes programs to crash if 
 * there is no end to the loop.
 * 
 * 1. For Loops uses 3 expressions to determine the start of the loop, the end of the loop, and how it will change
 *    after every run. A while loop uses a count and increases the count until a condition is met. A for-in loop
 *    loops through the keys in an object.
 * 2. A loop can go forwards or backwards. It can go up to a high number limit, or it can go backwards and stop at zero.
 * 3. You can loop through the values in an Array.
 * 4. To loop over an object you use the for in loop. 
 */


1. //for Loops//

for(let i = 0; i <= 5; i++){
   console.log(i);
}// will log 0, 1, 2, 3, 4, 5 to console

//while Loops//
let count = 1;
while(count <= 3){
    console.log('A');
    count ++
}//Will log 'A' 3 times to console

//for in Loops//
const obj = {
    name: 'Nasthia',
    age: 28,
    sign: 'Gemini'
}
for(var key in obj){
    console.log(key);
}//will log the keys name, age, sign to console

2. //Going forwards and backwards//
let number = 0;
for(let i = 0; i < 25; i++){
   number += i;
   console.log(number); 
}// will log numbers 0-25 to console

const array = ['a', 'b', 'c', 'd', 'e'];
for(let x = array.length - 1; x >= 0; x--){
    console.log(array[x]);
}//will print e, d, c, b, a to console


3.//Looping through array//
var names = ['John', 'Mary', 'Gina', 'James']
///.           0.      1.       2.      3
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}//loop runs through the index in the array starting with index zero it will print the value in that index
//this is how it will log to console adter the loop
//John
//Mary
//Gina
//James

4. //for in loop//
for(var key in obj){
    console.log(obj[key])
}//this will log the key values in the obj object above
//Nasthia
//28
//Gemini
