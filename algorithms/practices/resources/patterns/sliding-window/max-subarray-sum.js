/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with
the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below,
[100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null

Constraints:
- Time Complexity - O(N)
- Space Complexity - O(1)
 */

function maxSubarraySum(arr, n){
    // Edge Case: if arr length is 0, then return null
    // Edge Case: if n is bigger than arr. length then return null
    // Edge Case: if arr or n are null than return null
    if(arr.length <= 0 || arr.length < n || n === null){
        return null;
    }
    // Create two variables that will store the subarray, one temporarly, and the other with the max
    //let subArray = [];
    let tempSum = 0;

    // Create the subarray
    for(var i = 0; i < n; i++){
       // subArray.push(arr[i]);
        tempSum += arr[i];
    }
    let maxSum = tempSum;

    for(var i = n; i < arr.length; i++){
        tempSum += arr[i] - arr[i-n];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2));// 5
console.log(maxSubarraySum([2,3], 3));// null