/**Given an array of integers, calculate the ratios of its elements that are , , 
 * and . Print the decimal value of each fraction on a new line with 6 places after the decimal.
  Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
  though answers with absolute error of up to  are acceptable.
**/
let arr = [-4, 3, -9, 0, 4, 1];

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let len = arr.length;
  let charMap = {
    possitive: 0,
    negative: 0,
    zero: 0,
  };

  for (let index = 0; index < len; index++) {
    if (Math.sign(arr[index]) == 1) {
      charMap.possitive += 1;
    } else if (Math.sign(arr[index]) == -1) {
      charMap.negative += 1;
    } else if (Math.sign(arr[index]) == 0) {
      charMap.zero += 1;
    }
  }

  for (let [key, value] of Object.entries(charMap)) {
    console.log((value / len).toPrecision(6))
  }
}

plusMinus(arr);