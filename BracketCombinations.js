function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function BracketCombinations(num) {
    if (num === 0) return 1;

    // code goes here  
    // console.log(num);
    // (2n)! / ((n+1)! * n!);

    return factorial(2 * num) / (factorial(num + 1) * factorial(num));

}

// Example Test Cases
console.log(BracketCombinations(3)); // Output: 5
console.log(BracketCombinations(2)); // Output: 2
console.log(BracketCombinations(4)); // Output: 14
console.log(BracketCombinations(1)); // Output: 1
console.log(BracketCombinations(0)); // Output: 1