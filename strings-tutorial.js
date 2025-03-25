// Strings

const name = "   Hello World     "; // "string"
const strObj = new String('Hello World'); // object

// == and ===
// = assignment
// == equality comparism
// === strict comparism (compares equal and its of the same type)

// console.log(name == strObj);
// console.log(name.length); // checking
// console.log(name.toUpperCase()) // HELLO WORLD
// console.log(name.toLowerCase()); // hello world
// console.log(name.trim())
// console.log(name.charAt(6))
// console.log(name[6]) // W
// console.log(name) // W
// console.log(name.trim()) // W
// console.log(name.trim().indexOf('Hello')); // chain methods

// let newStr = name.trim().replace('World', ', welcome to Church');

// console.log(newStr);


// const vs let
let words = 'apple, bannana, orange';
// console.log(words.split(', ').join(', '));


// console.log(words.indexOf('bannana'));
// console.log(words.includes('pinneaple')); // returns a true or false
// console.log(words.search('apple')); // returns a true or false

let firstName = "John";
let lastName = "john";

// console.log(firstName.localeCompare(lastName));

// check if this string is a palendrome: equals to its opposite 
const wordToCheck = "abba"; // true
const wordToCheck2 = "hello"; // false

// take the given String
// reverse it
//compare the original with th e reversed

function isPalendrome(str) {
    let result = '';
    // console.log('Im here')
    // take the given String
    // lopp through original str
    // for (let i = 0; i < str.length; i++) {
    for (let i = str.length - 1; i >= 0; i--) {
        // for (let i = str.length - 1; i = 0; i--) {
        // console.log(i + ' is the index of: ' + str[i]);
        // console.log(`${i} is the index of: ${str[i]}`);
        result += str.charAt(i);
    }
    // reverse it
    console.log(result === str)
    //compare the original with th e reversed


    // console.log(str);
    return str;
}

isPalendrome("abba"); // true
isPalendrome("abttyba"); // false
isPalendrome("string"); // false

function isPalendromeOptimized(str) {
    // result = false;
    // if (str === str.split('').reverse().join('')) console.log(result = true)
    let result = str.split('').reverse().join('');
    if (str === result) {
        console.log(true)
    } else {
        console.log(false)
    }

    // 
}

// isPalendromeOptimized("hello")




















/*
const name = "John Doe";

// give me each letter in this string

for (let i = 0; i < name.length; i++) {
    // console.log(name[i]);
    if (name[i] === 'o') {
        console.log('Found letter: ' + name[i])
    }
}

*/


/*
const str = "Car";

for (let index = 0; index < str.length; index++) {
    const element = str[index];
    console.log(element);
}
    */