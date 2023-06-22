// Introduction to JavaScript and its role in web development
// Writing JavaScript code in HTML
// Variables, data types, and basic operators in JavaScript


let myName = 'Olusoji';
console.log(myName);
let x = 78;
let y = 23;
let z = 0;
console.log(x * y * z)


var age = 67;
let name = 'John';
const PI = 3.14

x = 9;


// string
// number
// undefined
// null
// boolean

// object
// array

console.log(typeof('Olu'))
console.log(typeof("Olu"))
console.log("I'm pretty sure")
console.log(typeof(`Olu`))

console.log(6)
console.log("6")


let fName;

console.log(true)
console.log(false)

let studentName = ['Ade', 89, null, true, undefined]
let studentName2 = ['Ade', 'rodah', 'soji', 'yemi', "john"]

let persons ={name: 'John', age: 36, gender: 'male'}

console.log( 3 * 7 )
console.log(3 + 7)
console.log(3 - 7 )
console.log(3 ** 7 )
console.log(22 / 7)
console.log(22 % 7)

console.log(3>7)
console.log(3<7)
console.log(3==7)
console.log(3==3)
console.log(3=="3")
console.log(3 === '3')
console.log(3 >= 7)
console.log(3 <= 7)
console.log(3 != 4)
console.log(3 !== '3')

console.log(4 > 3  && 10 >5) //ampersand AND 
console.log(4 > 6  && 10 >5) //ampersand AND 

console.log(4 > 6  || 10 > 5) //pipe  OR 

console.log(!4 > 1)


let count = 0
console.log(--count)
console.log(--count)

let newCount = 0
console.log(newCount)
console.log(++newCount)
console.log(++newCount)
console.log(++newCount)


// Control Flow and Functions
// - Conditional statements (if, else if, switch)
// - Looping statements (for, while, do while)
// - Introduction to functions and their usage

// IF STATEMENT
// if(condition){
//     what should happen
// }

let now = 'friday';
if(now === 'tueday'){
// if('friday' === 'tueday'){
    console.log('The answer is tuesday');
}

let num = 3;
if(num > 0){
    console.log(`${num} is a positive number`);
}

let isRaining = true;
if(isRaining){
    console.log("Remember to go with an umbrella");
}

// IF ELSE STATEMENT

let presentday = 'SUNDAY';
if(presentday === 'sunday'){
    console.log('Today is the first day of the week which is sunday');
}else{
    console.log('today is not sunday or something went wrong');
}


// IF, ELSE IF, ELSE STATEMENT

let a =8990
if(a > 0){
    console.log(`${a} is a positive number`)
}else if(a < 0){
    console.log(`${a} is a negative number`)
}else if(a === 0){
    console.log(`${a} is zero`)
}else{
    console.log(`${a} is not a number`)
}

// let val1 = prompt("Enter a number")
// console.log(val1 + 56)

// LOOP
// for loop, while loop, and do while loop

// for loop
// for(initialization, condition , increment/decrement){
//     whatever you want execute goes here
// }

for(let i =1; i <= 5; i++){
    console.log(i)
}


for(let i = 0; i < 5; i++){
    console.log(i)
}

for(let i = 10; i <= 50; i++){
    console.log(i)
}

// 0*0=0
// 1*1=1
// 2*2=4
// 3*3=8
// 4*4=16
// 5*5=25

for(let i=0; i<=5; i++){
console.log(`${i} * ${i} = ${i * i}`)
}

// while loop
let j = 0;
while(j <=5){
    console.log(j)
    j++;
}

// do while loop
let k = 0;
do{
    console.log(k)
}while(k <= 5)

// function
function theNameOfTheFunction(){
    // code block or statement to be executed
    // perform operation or calculation
    // return a value
}

function multipyTwoValues(){
    let a = 30;
    let b = 5;
    console.log(a * b)
}