/**
 * VARIABLES:
 * 
 * 0. Variables are the holding boxes for the data we are adding to our program. A variable can be hold data of different types:
 * some simple, like strings, numbers, and booleans, and others complex like arrays, objects, and functions. Variables are alterable
 * and can be changed into different values.
 * 
 * 1. Declaration and Assignment:
 * There is a two step process for variables. First you must declare them with the name you will be giving the variable, Second 
 * you must give it a value. You can do both steps on the same line of code, which is called initializing: giving a variable an
 * initial value.
 *  
 * 2. var, let, and const:
 * With the ES6 update on Javascript we were introduced to let and const, two new variable declarations. The difference between 
 * these is their reach in the Global scope. Var is function scoped, which means it is not reachable outside of the function it 
 * was declared in. let and const are block scoped and function scoped, meaning they are not reachable outside of any outside 
 * scopes, or anything with curly brackets, they were created into. There are some more factors that differentiate the different
 * variable declarations:
 * let:    
 *      -can be reassigned
 *      -can be initialized as undefined
 *      -cannot be redeclared
 *      -naturally block scoped
 * const: 
 *      -cannot be initialized as undefined
 *      -cannot be redeclared
 *      -cannot be reassigned
 *      -naturally block scoped
 * var:
 *      -can be redeclared
 *      -can be reassigned
 *      -can be initialized as undefined
 *      -naturally function scoped
 * 3. Hoisting:
 * 
 * 
 */

//1. Declaration and Assignment //

//Declaration
//the variable age is declared but since it has not been assigned a value it will return undefined
var age;
console.log(age); //undefined

//Assignment
//age has now been assigned to a value, so it will return that value when called.
age = 28;
console.log(age); //28


//2. var, let, and const //
var milk;//var can be declared without a value

milk = '2%';
milk = 'whole';//var can be reassigned

var milk = 'comes from cows'//here var is being redeclared

function drink(){
    var juice = 'yummy';
}
console.log(juice);//reference error: juice is not defined
//this is because var is function scoped and cant be reached outside of the function.

const pieFilling = 'cherry';
pieFilling = 'apple';//TypeError: Assignment to constant variable.
//const can not be reassigned

if(milk = 'whole'){
    const animal = 'cow';
}
console.log(animal);//ReferenceError: animal is not defined
//const is block scoped so it can not be reached outside of the if statement.
let bread; // bread can be initialized as undefined
let bread = 'sourdough';//SyntaxError: Identifier 'bread' has already been declared
//let can not be redeclared
bread = 'sourdough';//let can be reassigned

for (eggs = 0; eggs <= 12; eggs++){
    let cake = 0
    cake += eggs;
}
console.log(cake);//ReferenceError: cake is not defined
//let is block scoped and can not be accessed outside of the for loop


//3.Hoisting//

