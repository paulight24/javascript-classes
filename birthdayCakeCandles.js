/*
You are in charge of the cake for a child's birthday. It will have one candle 
for each year of their total age. They will only be able to blow out the 
tallest of the candles. Your task is to count how many candles are the tallest.
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
const candles = [4, 4, 1, 3]
function birthdayCakeCandles(candles) {
    // Write your code here
    let key = 0;
    let val = 0;
    let result = 0;
    // create charMap of  number count
    let charMap = {};

    for (let index = 0; index < candles.length; index++) {
        const element = candles[index];
        charMap[element] ? charMap[element] += 1 : charMap[element] = 1;
    }

    // loop through charMap obj for the highest key
    // console.log(charMap)
    for (let row in charMap) {
        if (charMap[row] > val) {
            val = charMap[row];
            key = row;
        }
    }
    result = val;
    console.log(result);
    return result;
} (birthdayCakeCandles(candles))