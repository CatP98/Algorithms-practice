/*
Write a function called maxSunarraySum that accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array

maxSubarraySum([1,2,5,2,8,1,5]. 2);  // 10 (2+8)
maxSubarraySum([1,2,5,2,8,1,5], 4);  // 17 (2+5+2+8)
maxSubarraySum([4,2,1,6], 1); // 6
maxSubarraySum([4,2,1,6,2], 4); // 13 (4+2+1+6)
maxSubarraySum([], 4); // null
 */

function maxSubarraySum(arr, n){
    // Case the array is empty, return 0
    if( arr.length < n || arr.length === 0){
        return null;
    }
    let tempSum = 0;
    let maxSum = 0;
    for (var i = 0; i < n; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for(var i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}



console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
console.log(maxSubarraySum([4,2,1,6], 1));
console.log(maxSubarraySum([4,2,1,6,2], 4));
console.log(maxSubarraySum([], 4));