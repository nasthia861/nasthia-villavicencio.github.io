/**
 * OPERATORS:
 * 
 * 0. Operators are symbols used to manipulate operands(values).There are many different types of operators. Some
 * are used to change the value of a variable, others are used to compare different kinds of operands and find out about
 * their truthiness.
 * 
 * 1.Assignment Operators
 * Assignment Operators assign value to a variable. The most commonly used assignment operator is "=" this operator is 
 * used to initialize a variable with its first value. There are other assignment operators that combine = with 
 * arithmetic operators to manipulate the current value. 
 * Examples: (+=, -=, *=, /=, %=, **=). 
 * These assignment operators and their purpose will make more sense once we learn how arithmetic operators work.
 * 
 * 2. Artithmetic Operators
 * Arithmetic Operators are used sort of how you would use the symbols in a calculator. They can be used with number 
 * values or to concatenate string values.
 * Examples: (+, - *, /, %)
 * 
 * 3.Comparison Operators
 * Comparison operators are used to compare two values. Most often used in If statements and loops to see if a block of 
 * code should run. It returns a boolean value.
 * Examples: (==, !=, ===, !==, >, >=, <, <=)
 * 
 * 4.Logical Operators
 * Logical Operators are used to test multiple comparison operators and return a boolean. They are used in If statements 
 * and loops.
 * Examples: (&, ||, !)
 * 
 * 5.Unary Operators
 * Unary Operators work on a unitary value. 
 * An example includes the increment and decrement operator.
 * These operators are used to increase or decrease the value by 1.
 * Examples: (++, --)
 * There are also the unary plus and unary minus operators, these operators turn a value into a number value.
 * Examples: (+(value), -(value))
 * 
 * 6.Ternary Operator
 * The Ternary Operator takes in three operands. There is only one Ternary Operator and it is the Conditional Operator.
 * Sort of a shorthand If statement. It follows a conditional statement followed by a '?' then an expression to run if
 * the conditional is true, followed by ':', then an expression to run if the conditional is false.
 * Example: (x > y ? return 'greater than' : return 'less than')
 * 
 */

//1.Assignment Operators//
let x = 10;
console.log(x);//10
console.log(x += 1);//11
console.log(x -= 5);//5
console.log(x *= 5);//50
console.log(x /= 2);//5

//2.Arithmetic operators//
let y = 13;
console.log(y - 3);//10
console.log(y + 3);//16
console.log(y * 2);//26
console.log(y / 13);//1
console.log(y % 7);//3

//3.Comparison Operators//
console.log(28 === '28');//false
console.log(28 !== '28');//true
console.log(5 == '5');//true
console.log(10 != 9);//true
console.log(10 > 14);//false
console.log(10 < 14);//false
console.log(10 >= 10);//true
console.log(11 <= 10);//false


//4.Logical Operators
console.log(true && true)//true
console.log(true && false)//false
console.log(true || false)//true
console.log(false || false)//false
console.log(!false);//true

//5.Unary Operators//
let a = 0;
console.log(a++)//1
console.log(a++)//2
console.log(a++)//3
let b = 0;
console.log(b--)//-1
console.log(b--)//-2
console.log(b--)//-3
let c = 5;
console.log(-c)//-5
let d = false;
console.log(+d)//0

//6.Ternary Operator//
function stopLight(color){
    return(color === 'green' ? 'go' : 'wait')
}
console.log(stopLight('green'))//'go'
console.log(stopLight('red'))//'wait'