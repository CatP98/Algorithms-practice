/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any
duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
Restrictions:

Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
 */

function areThereDuplicates(...args){
    if(args.length < 2) return false;

    var frequencyCounter = {};

    for( let char of args){
       if(frequencyCounter[char])  {
           return true;
       } else {
           frequencyCounter[char] = 1;
       }
    }
    return false;
}
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
console.log(areThereDuplicates('a', 'a'));
console.log(areThereDuplicates('a'));
console.log(areThereDuplicates());


