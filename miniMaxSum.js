/**
 * Given five positive integers, find the minimum and maximum values that can be 
 * calculated by summing exactly four of the five integers. Then print the 
 * respective minimum and maximum values as a single line of two 
 * space-separated long integers.

Example
The minimum sum is  and the maximum sum is . The function prints
16 24
 */
arr = [1, 3, 5, 7, 9]; // 16 24
function miniMaxSum(arr) {
    let minVal = 0, maxVal = 0;
    let firstFour = [], lastFour = [];
    // Write your code here
    // Sort the array
    let sortedArray = arr.sort((a, b) => a - b);

    // get minFour
    for (let i = 0; i < arr.length - 1; i++) {
        minVal += arr[i];
    }

    // get minFour
    for (let j = 1; j < arr.length; j++) {
        maxVal += arr[j];
    }

    console.log(minVal, maxVal);
}

miniMaxSum(arr)