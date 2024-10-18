/*
Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed
to the function is located. If the value is not found, return -1

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1
 */

function binarySearch(arr, n) {
    let left = 0;
    let right = arr.length -1;

    if( arr[right] === n) return right;

    while(left <= right){
        let mid = Math.floor((left + right)/ 2);

        if(arr[mid] === n){
            return mid;
        }
        else if(arr[mid] < n){
            left = mid + 1;
        }
        else if(arr[mid] > n){
            right = mid -1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,8],4) ); // 3
console.log(binarySearch([1,2,3,4,5,6],6)); // 5
console.log(binarySearch([1,2,3,4,5,6],11) );// -1)

// Test when the target is the first element
console.log(binarySearch([1, 2, 3, 4, 5, 6], 1));  // 0

// Test when the target is the middle element
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));  // 2

// Test when the target is the last element (edge case)
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));  // 5

// Test when the array has negative numbers
console.log(binarySearch([-10, -5, 0, 3, 5, 9, 12], 5));  // 4

// Test when the array has only one element (target exists)
console.log(binarySearch([4], 4));  // 0

// Test when the array has only one element (target doesn't exist)
console.log(binarySearch([4], 10));  // -1

// Test when the array is empty
console.log(binarySearch([], 10));  // -1

// Test when the target is larger than any element in the array
console.log(binarySearch([1, 2, 3, 4, 5, 6], 10));  // -1

// Test when the target is smaller than any element in the array
console.log(binarySearch([1, 2, 3, 4, 5, 6], -10));  // -1

// Test when the array contains repeated elements, and the target is in the array
console.log(binarySearch([1, 2, 2, 2, 3, 4, 5], 2));  // 2 (returns the first occurrence)

// Test when the array contains repeated elements, but the target is not in the array
console.log(binarySearch([1, 2, 2, 2, 3, 4, 5], 6));  // -1

// Test when the target is not in the array
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7));  // -1

// Test when the target is just below the middle of the array
console.log(binarySearch([1, 2, 3, 4, 5, 6], 2));  // 1