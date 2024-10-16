/*
    Implement a function called countUniquevalues, which accepts a sorted array, and counts the unique values in the array.
    There can be negative numbers in the array, but it will always be sorted.

    Input/output example:
    countUniqueValues([1,1,1,1,1,1,2]); // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]); // 7
    countUniqueValues([]); // 0
    countUniqueValues([-2,-1,-1,0,1]); // 4

 */

/* I'm using ref as a flag to ensure that only the first occurrence of a repeated element is counted as unique, and subsequent
duplicate occurrences aren't.
 */
function countUniqueValues1(arr) {
    // Define two pointers: the Left pointer, starts at the beginning, and the right that starts right after left
    let left = 0;
    let right = 1;
    // Define a counter for unique values, starts at 0
    let counter = 0;
    // Define a reference that, tells wether the repeted value is already counted  as unique or not, if 0 the value was not counted, if 1 it was counted
    let ref = 0;

    // start a loop, that stops, once the right [pointer reaches the end of the array
    while(right < arr.length){
        // if the value in left !== value in right,  counter ++, left takes the place of right, right moves to the next value
        if(arr[left] !== arr[right]){
            ref = 0;
            counter ++;
            left = right;
            right ++;
        }
        // if value of left === value of right,
            // if ref = 0 than it becomes 1, so that we know this value already counted as unique
                // counter ++
            //right moves to next val
        else if(arr[left] === arr[right]){
            if(ref === 0){
                ref = 1;
                counter ++;
            }
            right ++;
        }
    }

    return counter
}

// Issues:
// it's overcounting the first element of a repeated elements set, because of the flag.

/*
It starts counting from 1 because the first element is always unique, and it only increments the counter when it encounters a new
unique value (arr[left] !== arr[right]).
 */
function countUniqueValues2(arr) {
    if (arr.length === 0) return 0; // Handle the empty array case

    let counter = 1; // Start at 1 because the first value is always unique
    let left = 0;

    for (let right = 1; right < arr.length; right++) {
        if (arr[left] !== arr[right]) {
            counter++;  // Found a new unique value
            left = right;  // Move the left pointer to the new unique value
        }
    }

    return counter;
}

/*
This version uses two pointers (i and j). The pointer i tracks the position of unique elements, and j traverses the array.
When a new unique value is found, it is placed at the next position of i, which effectively shifts all unique values to the front of
the array. The final count is i + 1 because i is a zero-based index.

This is the most space-efficient implementation because it modifies the array in place and avoids creating new variables.
The time complexity is still O(n), but it uses O(1) space, making it optimal for this problem.
 */
function countUniqueValues(arr){
    if (arr.length === 0) {
        return 0;
    };

    let i = 0;  // pointer for unique values
    let j = 1;  // pointer for traversing

    while (j < arr.length) {
        if (arr[j] !== arr[i]) {
            i++;              // move to next position for unique value
            arr[i] = arr[j];  // store the new unique value at position i
        }
        j++;  // always increment j to continue traversing
    };

    return i + 1;  // unique values are stored in the first i + 1 elements
};


console.log(countUniqueValues([1,1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4
console.log(countUniqueValues([1, 1, 2]));