/*
    Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name
formed by rearranging the letters of another, such as cinema, formed from iceman.
 */

// time comlexity = O(3n) -> O(n)

function validAnagram( str1, str2 ) {
    // check if the lengths of the strings are the same, if not return false
    // create two frequency counters for each string, that counts the ocorrence of each character
    // an itereation on the first string, check if the counter 2 contains all the keys from counter 1, if not return false
    // an iteraction that check is the value (nb of occorencies) for counter 2 is the same for the value of counter 1

    // Check if the lengths of the strings are the same, if not return false
    if( str1.length !== str2.length ) {
        return false;
    };

    // Create two frequency counters for each string
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // Count occurrences of each character in str1
    for (let char of str1){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    };

    // Count occurrences of each character in str2
    for (let char of str2){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    };

    // Compare frequencies between both counters
    for (let key in frequencyCounter1){
        // Check if key exists in frequencyCounter2 and the frequencies match
        if(!frequencyCounter2[key] || frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        };
    };
    return true;
};

// Test cases:
console.log(validAnagram('', ''));               // true
console.log(validAnagram('ana', 'ana'));         // true
console.log(validAnagram('banana', 'ananab'));   // true
console.log(validAnagram('banana', 'ananas'));   // false
console.log(validAnagram('hey', 'heyo'));        // false
console.log(validAnagram('qwerty', 'ytrewq'));   // true
console.log(validAnagram('awesome', 'awesomu')); // false
