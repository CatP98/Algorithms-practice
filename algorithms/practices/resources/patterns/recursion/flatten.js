/*
flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

Examples:
flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
 */

function flatten(arr){
    // Base Case: stop once the arr size is 0
    if(arr.length === 0) return [];

    // Recursive Case:
    // Check if the first element is an array
    if (Array.isArray(arr[0])) {
        // Flatten the first element and concatenate with the flatten of the rest
        return flatten(arr[0]).concat(flatten(arr.slice(1)));
    } else {
        // If it's not an array, return the first element concatenated with the rest
        return [arr[0]].concat(flatten(arr.slice(1)));
    }
}

function helper(char){
    let arr2 =[];
    return arr2.push(char);
}

// Test Cases:
console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]