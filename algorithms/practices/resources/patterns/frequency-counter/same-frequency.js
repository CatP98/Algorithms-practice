/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
- Time: O(N)

Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 */

function sameFrequency(int1, int2){
    // Convert the integers to strings so we can iterate over the digits
    let str1 = int1.toString();
    let str2 = int2.toString();

    // If the lengths are not the same, they can't have the same frequency of digits
    if(str1.length !== str2.length) return false;


    // Each integer will be given an object that counts the frequency of each digit - key is the digit and value is the frequency
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // Iterate over each integer digit, in order to add each digit to the object counter, and count its frequency.
    // Do this for both integers

    for(var char of str1){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    };

    for(var char of str2){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    };

    // Compare the frequency objects created. If obj2 does not contain the key of obj1 and its frequencies are not the same -> return false
    for(var key in frequencyCounter1){
        if(!frequencyCounter2[key] || frequencyCounter1[key] !== frequencyCounter2[key]){
            return false;
        }
    };

    // else, return true, because it means all checks are passed
    return true;
};

console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false


/* NOTES ---- Difference bwtween  for...of and for...in -> mainly what they iterate over

 --for...of:
-Iterates over values (characters for strings, elements for arrays).
-Works on any iterable (like arrays, strings, maps, sets, etc.).

--for...in:
-Iterates over keys or indices (for arrays/strings, it will iterate over the index).
-Generally used for iterating over the keys of an object, though it can be used for arrays or strings (which isn't always recommended).

--- When to use:
Use **for...of** when you want to iterate over values (e.g., characters in a string, elements in an array).
Use **for...in** when you want to iterate over keys or indexes (like when you want to access the properties of an object or the indices of an array).
 */