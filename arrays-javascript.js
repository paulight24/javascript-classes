// ARRAY in Javascript
// iterable or loopable
// collection or list
// items


let arr = [1, 2, 3, 4, 5];
let arr1 = new Array(''); // class definition
let arr2 = [];


let fruits = ["apple", "banana", "orange"];
let arrPlus = ["apple", "banana", "orange", arr, 2, {}];

// console.log(fruits[0]);
// console.log(fruits);
// push()

// fruits.push('cherries');
// fruits.pop(); // Removes the last element from an array and returns it
// let aNewArray = fruits.length .slice(0, 1);

// console.log(arrPlus.length);

const getListOfItemsInArr = (arrValue) => {

    for (let i = 0; i < arrValue.length; i++) {
        console.log(`The index of ${i} is ${arrValue[i]}`);
    }
}

// getListOfItemsInArr(fruits);

// function filterArray(someArray) {
//     for (let row of someArray) {
//         console.log(row);
//     }
// } (filterArray(fruits));

function filterArrayPush(someArray) {
    let result = [];
    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i] == 'orange') {
            result.push(someArray[i]);
        }

    }
    console.log(result);
}

function filterArray(someArray) {
    let result = someArray.filter(currentFruit => currentFruit === 'orange');
    console.log(result);
}

// filterArray(fruits);


function duplicateArray(someArray) {
    let newArray = [];
    console.log('newArray before:', newArray);
    // ... spread operator
    newArray = [...someArray];
    console.log('newArray:', newArray);
}



duplicateArray(fruits);

// New way of creating functions
function functionName(arr) {
    return arr;
}
// ES6 ^
// const funcName = (arr) => arr;
const funcName = (arr) => {
    console.log(arr)
    return arr;
}

const moreThanOneLine = (arr) => arr;


function arrayPossibilities(someArray) {
    let arr = [...someArray]; // duplicting an array using the spread operator
    // console.log('arr: ', arr);
    // let result = arr.filter((currentFruit) => currentFruit == 'banana')
    // let result = arr.map((currentFruit, index) => currentFruit + 's' + index)
    // let result = arr.map((currentFruit, index) => currentFruit.toUpperCase())
    let result = arr.map((currentFruit, index) => (currentFruit.slice(0, 1).toUpperCase()) + currentFruit.slice(1, currentFruit.length))
    // let result = arr.reduce((currentFruit) => currentFruit == 'banana')
    console.log('result: ', result);
}

// [1, 2, 3, 4, 5]
// [2345, 34454]

arrayPossibilities(fruits);

