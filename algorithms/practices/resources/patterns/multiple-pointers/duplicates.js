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

// O(n^2)
function  areThereDuplicatesMe(...args){
    if(args.length < 2) return false;
    //let left = 0;
    //let value = 0;
    let next = 0;

    for(var i = 0; i < args.length; i++){
        next = i + 1;
        while(next < args.length){
            if(args[i] === args[next]){
                return true;
            }
            else {
                next++;
            }
        }
    }
    return false;
}

function areThereDuplicates(...args) {
    // Sort the arguments with a custom comparator
    // args.sort((a, b) => {
    //     if (a < b) return -1;  // a comes before b
    //     if (a > b) return 1;   // a comes after b
    //     return 0;              // a and b are equal
    // });
    // console.log(args);
    //
    // console.log(args.sort());

    args.sort();

    // Check for duplicates
    for (let i = 0; i < args.length - 1; i++) {
        if (args[i] === args[i + 1]) {
            return true;  // Duplicate found
        }
    }
    return false;  // No duplicates found
}

// Test cases
console.log(areThereDuplicates(1, 2, 3));              // false
console.log(areThereDuplicates(1, 2, 2));              // true
console.log(areThereDuplicates('a', 'b', 'c', 'a'));    // true
console.log(areThereDuplicates(3, 'banana', 1, 'apple', 2)); // false
console.log(areThereDuplicates(1, '1', 2, 2));           // true (string '1' and number 1 are considered different)
console.log(areThereDuplicates(undefined, 1, 2, 2));      // true (handling undefined)
