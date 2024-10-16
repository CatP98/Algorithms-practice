/*
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3,3]
sumZero([-2, 0, 1,3]) // undefined
sumZero([ 1, 2, 3]) // undefined
 */

//My solution:

function sumZero1(arr) {
    // make sure the array is sorted

    // create 2 pointers, one that starts at the beginning of the arr and the other at the end
    let left = 0;
    let right = arr.length - 1;

    // while the pointers are not pointing at the same value - element in the same position - keep check

        for( var i = left; i < arr.length; i++){
            while(right > left) {
                // if the absolute of the values incremented is zero, return an array with the values
                if (Math.abs(arr[left]) - Math.abs(arr[right]) === 0) {
                    return [arr[left], arr[right]];
                } else {
                    // else, left, moves one value to right (++) and right moves one value to left (--)
                    right--;
                };
            };
        };
        return undefined;
};

//Issues: :
// Unnecessary for loop: You are using both a for loop and a while loop, but the for loop is redundant. The two-pointer technique does not need this extra iteration.
// Using Math.abs() is unnecessary: The array is sorted, so negative and positive values should balance out directly without needing to compare absolute values. You just need to check if the sum of arr[left] and arr[right] is zero.
// Pointer movement logic: You are only moving the right pointer inside the while loop. However, in the two-pointer technique, depending on whether the sum is greater than or less than zero, you should move either the left or the right pointer, not just right.


function sumZero(arr) {
    // Initialize two pointers: front starting at the beginning of the array and back at the end
    let front = 0;
    let back = arr.length - 1;
    var target= 0;

    // Continue looping as long as the left pointer is less than the right pointer
    while(front < back){
        // Calculate the sum of the values at the left and right pointers
        let sum = arr[front] + arr[back];
        // If the sum is 0, return an array with the values at the left and right pointers
        if(sum === target){
            return [arr[front], arr[back]];
        }
        // If the sum is greater than 0, move the right pointer to the left (back--)
        else if(sum > target){
            back--;
        }
        // If the sum is less than 0, move the left pointer to the right (front++)
        else if(sum < target){
            front ++;
        }
    }
    // If no pair is found by the end of the loop, return undefined
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1,3])); // undefined
console.log(sumZero([ 1, 2, 3])); // undefined
console.log(sumZero([ 0, 1, 4, 8]));
console.log(sumZero([-8, -4, -1, 0, 0, 0, 0, 1, 4, 8]));