/*
Write a recursive function called someRecursive which accepts an array and a callback.
The function returns true if a single value in the array returns true when passed to the callback.
Otherwise it returns false.

SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

Examples:
someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
someRecursive([4,6,8], val => val > 10); // false
 */

function someRecursive(arr, callback){
    // Base Cases:
    // - If the array is empty, return false, since there are no elements left to check, and the already checked did not return true anytime.
    if(arr.length === 0) return false;

    // - If one value returns true, return true, since all we need is one value to return true when passed on to the callback
    if(callback(arr[0])) return true;

    // Recursive Case: on the rest of the array
    return someRecursive(arr.slice(1), callback);
}

// Test Cases:
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], val => val % 2 !== 0)); // true
console.log(someRecursive([4,6,8], val => val % 2 !== 0)); // false

/*
someRecursive([4,6,8], isOdd) check if length == 0, check if isOdd(4), calls someRecursive([6, 8], isOdd)      => false
someRecursive([6, 8], isOdd) checks if length === 0, check if isOdd(6), calls someRecursive([8], isOdd)       => false
someRecursive([ 8], isOdd), checks if length === 0, checks if isOdd(8), calls someRecursive([], isOdd)         => false
someRecursive([], isOdd), checks if length === 0                                                               => returns false
 */

console.log(someRecursive([4,6,8], val => val > 10)); // false