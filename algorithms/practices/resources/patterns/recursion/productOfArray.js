/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 */

function productOfArray(arr){
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1)) ;
}

console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,1,1,1,1]));
console.log(productOfArray([0,2,3,5]));
console.log(productOfArray([13]));
console.log(productOfArray([]));
