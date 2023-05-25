/**
 * CONTROL FLOW
 * 
 * 0. The order in which the program is reading and executing your code. When you press run on your code, the program usually
 * reads the code from top to bottom. That is unless the code hits a for loop or a conditional statement. If it hits a for
 * loop it will repeat the code block until a condition is met. If it hits a conditional statement, it will only run the 
 * code if the condition is true.
 * 
 * 1. If: The first part of a conditional statement is the If part, its the first condition the program is testing for.
 * If it passes then the block of code inside the {} will run, if it does not pass it will either move on to the else if
 * statement, the else statement, or leave the conditional altogether and keep going with the rest of your code.
 * 
 * 2. Else-If: It is not required to have an else if statement but it is required to have an if statement before it if you
 * do have one. This is the next conditional your code is testing for if the first previous conditional failed.
 * 
 * 3. Else: The Else statement is a default code to run if your other conditional if statements fail. This does not need 
 * to pass any conditions as true, as soon as it hits it will run. Else statements are also not required in an if statement.
 * 
 * 4. Switch: Switch statements work like conditional if statement but in a larger scale. It still needs to pass a 
 * condition but its set up so that you can have multiple conditions run the same code or have one condition run 
 * multiple blocks of code.
 * 
 */

//1. If//
let plant = 'roses';
if(plant === 'roses'){
    console.log('I love roses');
}//'I love roses'
//the conditional statement im trying to pass is if my plant variable is strictly equal to 'roses'. since it is, it logs
// 'I love roses' to the console.

//2. Else if//
if(plant === 'sunflowers'){
    console.log('sunflowers are so pretty');
} else if(plant === 'roses'){
    console.log('In love roses');
}//'I love roses'
//since the first if statement fails, the program moves on to the next else if statement. That one passes and logs 'I 
//love roses' to the console.

//3. Else//
if(plant === 'sunflowers'){
    console.log('sunflowers are so pretty');
} else if(plant === 'tulips'){
    console.log('In love tulips');
} else {console.log('what kind of flowers are these?')}
//what kind of flowers are these?
//since the conditional reached the else statement, it immediately runs the code.

//4. Switch//
plant = 'daisy';
switch(plant){
    case 'rose':
        console.log('I love roses');
        break;
    case 'tulip':
        console.log('I love tulips');
        break;
    case 'sunflower':
    case 'daisy':
    case 'chrysanthemum':
        console.log('I love yellow flowers');
        break;
    default:
        console.log('what kind of flowers are these?')
}//'I love yellow flowers'
//each case is like an if/ else if statement, the default is like an else statement.