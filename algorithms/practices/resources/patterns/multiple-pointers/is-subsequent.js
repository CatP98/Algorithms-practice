/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a
subsequence of the characters in the second string. In other words, the function should check whether the characters in the first
string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:
- Time Complexity - O(N + M)
- Space Complexity - O(1)
 */


function isSubsequence(str1, str2){
    // Edge case: if sr2 is smaller than str1, than it will never contain str1 chars
    if(str2.length < str1.length){
        return false;
    }
    // Edge case: if str1 length is 0 than return true
    if(str1.length === 0){
        return true
    }
    // Create 2 pointers : i to traverse through the characters of str1, and j to traverse through str2
    let i = 0;
    let j = 0;

    // Traverse through str2 with j to find all chars of str1 in sequence
    // while there's chars on str2 to be checked, continue the loop
    while(j <  str2.length) {
        // if str1 === str2 then i++
        if(str1[i] === str2[j]){
            i++;
        }
        j++;
        // if i === str1 length, then return true
        if(i === str1.length){
            return true;
        }
    }
    return false;
}

/*
isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return i
  }
 */

//function isSubsequence(str1, str2, i){

    // if(str2 === null){
    //     return false;
    // }
    //
    // if(str1[i] === str2[0]){
    //     if (i === str1.length - 1){
    //         return true
    //     }
    //     i++;
    //     console.log(str2);
    // }
    // isSubsequence(str1, str2.slice(1, str2.length), i);
// }
//     function isSubsequence(str1, str2, i = 0) {
//         // Base case: if we have matched all characters in str1
//         if (i === str1.length) {
//             return true;
//         }
//         // Base case: if str2 is exhausted but str1 isn't fully matched
//         if (str2.length === 0) {
//             return false;
//         }
//         // Recursive case: match character or skip to next in str2
//         if (str1[i] === str2[0]) {
//             return isSubsequence(str1, str2.slice(1), i + 1);
//         } else {
//             return isSubsequence(str1, str2.slice(1), i);
//         }
// }

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abraca dabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
console.log(isSubsequence("abc", "aebdc")); // true
console.log(isSubsequence("abc", "acb"));   // false
console.log(isSubsequence("", "anystring")); // true
console.log(isSubsequence("longer", "short")); // false
