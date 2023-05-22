/**
 * FUNCTIONS:
 * 
 * 0. Functions are one of the building blocks of your code. They are instructions on how to manipulate your values. A 
 * function will take an argument as the input, modify it with your instructions in the code block, and then return an 
 * output.
 * 
 * 1. There are two phases to a function. First you must define what the function is doing. Then, you will be executing 
 * it (this is also called 'calling a function' or 'invoking the function')
 * 2. Parameters are the placeholders for your function, think of them like variables in an algrebraic equation. When you
 * are ready to call your function you will be replacing the parameters with arguments, these are the actual values you
 * are trying to pass in the function. Having parameters makes it so that you can reuse your function with different values.
 * 3. Function declarations is one of two ways to give a function a name, in this case you are declaring a function with a
 * name of your choosing
 * 4. Function expressions are the second way to name a function, in this case you are creating a variable and assigning it
 * to the function
 * 5. Taking Arguments for a Function are optional as some Functions don't require them. Same goes for outputs, sometimes
 * functions are used to execute some code but not return anything.
 * 6. Functions have the power to scope any variables outside of the function realm. However, any variables inside a 
 * function cannot be accessed outside of the function.
 * 7. Functions form closures around the data inside the code block. This data is kept alive and can be accessed with any
 * nested functions when they are called upon.
 */

//1.Definining and Calling a Function//
function sum(a, b){
    return a + b;
}//this whole code block is just the definition of the function, step 1
console.log(sum(1, 2))// 3
//this part is calling the function and its the second step.

//2.Parameters//
//here im creating a function that returns a string with the name of my friends. friendA and friendB are placeholders
function myFriend(friendA, friendB){
    return 'My friends are ' + friendA + ' and ' + friendB;
}
//when I call my function I am exchanging the parameters with the arguments I want to pass in the function
let sentence = myFriends('Amanda', 'Mayu');
console.log(sentence);//'My friends are Amanda and Mayu'

//3. Function Declaration//
function firstName(){
    return 'Nasthia';
};

//4. Function Expressions//
const lastName = function(){
    return 'Villavicencio';
}

//5. Functions without arguments and without outputs//
function hello(){
    console.log('hello');
}
console.log(hello())//undefined
//the console.log property is not actually returning anything, hence no output.

//6. Function with scope//
let age = 28;
function howOld(){
    let name = 'Nasthia';
    return 'I am ' + age;
}
console.log(howOld());//I am 28
//here the function has access to any data outside the function like our age variable
console.log(name);//ReferenceError: name is not defined
//however our name variable, since its inside the function, cannot be accessed outside of it.

//7. Closures//
function createAddFunc(y){
    let num = y
    return function(x){
        return x + num;//return function forms closure around num
    }
}
var addFunc8 = createAddFunc(8);
let example = addFunc8(5);
console.log(example);//13



