/**
 * DATA-TYPES
 * 
 * 0.Javascript uses different data-types to evaluate what kind of value you are working with. There are simple data types
 * for primitive values like: strings, booleans, numbers, NaN, null, undefined and more complex data types for complex 
 * values like: arrays, objects, functions.
 * 
 * 1. Number: Number data type is like a number you use in regular mathematics. It is defined with a numerical value.
 * 2. String: Strings are letters strung together inside quotations to form a word, sentence, etc. Strings are written
 * with '' or "".
 * 3. Boolean: Booleans are true/false properties. They are usually the return value of an if statement, in order to get
 * the code to run. Booleans can only ever be true or false.
 * 4. Array: Arrays are like lists, they can hold other data types inside of them, up to any amount.  Arrays are written 
 * with [].
 * 5. Object: Objects are a collection of properties and values. Objects can also hold other data types as their values.
 * Objects are written with {}.
 * 6. Functions: Functions are a set of instructions to execute. It is technacially an object that has the power to be
 * called upon. Functions can be declared after a = or after the word function.
 * 7. Undefined: Undefined is the data type of nothing. If you create a variable and dont set it equal to anything, it will
 * be set as undefined, until you change it. An empty string or a function that does not have a return are both examples of
 * undefined.
 * 8. Null: Null represents an intentional absense of an object value. It also tests as falsy.
 * 9. NaN: NaN stands for Not A Number. Its a common return for when what is supposed to be a numerical value returns as
 * not a numerical value. So think of an error message in a calculator. 
 * 10. Infinity and -Infinity: These are numerical values representing infinity.
 * 11. Primitive vs. Complex: The main difference is that Primitive data types can only hold one value and complex data
 * types are able to hold multiple values inside of them.
 * 12. By copy and by reference: When a primitive data type is being copied it makes a clone copy but in a new variable,
 * they are not attached to the original. So if anything changes with the original it will not affect the copy. When complex
 * data types are coppied they are coppied by reference, so they are copying what is happening to the original. If the 
 * originial or the copy changes, it changes the other along with it.
 */

//1. Numbers//
var myAge = 28
//myAge is a number data type

//2. String//
var myName = 'Nasthia'
//myName is a string data type

//3. Boolean//
var isStudent = true;
//isStudent is a Boolean data type

//4. Array//
var shoppingList = ['eggs', 'milk', 'bread'];
//shoppingList is an array data type

//5. Object//
var InTheHeights = {
    genre: 'Musical',
    year: 2005,
    creator: 'Lin-Manuel Miranda'
}
//InTheHeights is an object data type

//6. Functions//
var sum = function(a, b){
    return a + b;
}
//sum is a function data type

//7. Undefined
var nada;
console.log(typeof nada)//undefined
//nada is an undefined data type

//8. Null//
let number = null;
//number is a null data type

//9. NaN//
let what = 'me' / 5;
console.log(what);//NaN
//since you cant divide a string by 5 the return and what is equal to NaN

//10. Infinity//
let theMost = Infinity * Infinity;
console.log(theMost);//Infinity
//theMost is the data type infinity

//11. Primitive vs. Complex
var iAm = 'Nasthia'
var iAmComplex = {
    name: 'Nasthia',
    age: 28,
    gender: 'Female'
    race: 'Hispanic'
}
//iAm can only hold one value as a primitive data type. iAmComplex as a complex data type has the ability to hold primitive
//data types inside of it.

//12. Copy by value, Copy by reference
let myDog = 'Junebug';
let myBestFriend = myDog;
myDog = 'Robyn';
console.log(myBestFriend);//'Junebug
//even though I changed the value of myDog to 'Robyn'. Since this happens after I copied it to myBestFriend. the value
//of myBestFriend stays on the original value of myDog, which was 'Junebug'

let rousesList = ['ham', 'cheese', 'grapes'];
let shoppingList = rousesList;
rousesList.push('bananas');
console.log(shoppingList); // ['ham', 'cheese', 'grapes', 'bananas']
//when we pushed bananas to the rousesList array, it modified my shoppingList array as well.