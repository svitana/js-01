//alert('Hello World!');
//console.log('Hello World!');

var helloWorld = 'Hello World!';
document.write(helloWorld);

//let userName = prompt('Enter your name');
const userName = prompt('Enter your name');
document.write('<br>');
document.write('<br>' + userName);
// data types:
const num = 42 // Number, Infinity, NaN
const str = '<p>Some taxt</p>'; //String
const bool = true; // Boolean - true/false

const undef = undefined; // undefined
const n = null; //null

const obj = {}; // object
const sym = Symbol(); // Symbol
let age = Number(prompt('Your age'));
prn ('You are ' + checkAge(age));
age = age + 1;
prn ('Next year you will be: ' + age);



function prn(val) {
    document.write('<br>' + val);
}
function checkAge(age) {
    if(age >= 18){
        return 'Adult';
    } 
        return 'Child'
    
} 