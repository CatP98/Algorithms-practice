/*
    Write a function called same, which accepts two arrays. The function should return true if every
    value in the array has it's squared in the second srray. The fequency of values must be the same
 */

// O(n^2)c ->  .includes() has a time complexity of O(n) bc it's iterationg over the entire array2, and since it's nested in a for loop, the overall time complexituy is O(n^2);
function sameMe(array1, array2){
    if(array1.length !== array2.length){
        return false;
    }
    var counter = 0;
    for(var i = 0; i < array1.length; i++){
        let correctIndex = array1[i] ** 2;
        if (array2.includes(correctIndex)){
            counter ++;
        }
    }
    if (counter === array1.length){
        return true;
    }
    return false;
}


// Using frequency counter pattern:
//This pattern is used to efficiently count the frequency (number of occurrences) of elements in a collection, such as an array.
// It leverages an object (or hash map) to store and update the counts of each unique element in constant time, O(1),
// by using the element values as keys.

// If frequencyCounter1[val] is undefined (i.e., the key doesn't exist in the object yet), the expression (frequencyCounter1[val] || 0)
// will return 0, initializing the count.
// If frequencyCounter1[val] already exists and has a value (e.g., 2), it will return that value, and then add 1 to it.

// How It Works:
// Accessing the counter: For each element (e.g., val), you check whether it already exists in the object (the frequency counter).
// Initializing or updating: If it exists, you increment its count; if it doesn't, you initialize the count to 0 and then increment it by 1.
// O(n) -> Two separated for loops is vastly better than nested loops, since each has a O(n) time complexity and overall we get a O(xn) === O(n);

function same(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    // This will store the count of each number in array1
    let frequencyCounter1 = {};
    // This will store the count of each number (squares) in array2
    let frequencyCounter2 = {};

    // Count frequency of values in array1
    for (let val of array1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    // Count frequency of squared values in array2
    for (let val of array2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }


    // Compare frequencies
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
}

// Test cases
var arrayTest1 = [1, 2, 3, 4];
var arrayTest2 = [9, 16, 1, 4];
var arrayTest3 = [1];
var arrayTest4 = [4, 5, 7, 9];

console.log(same(arrayTest4, arrayTest1)); // false
console.log(same(arrayTest1, arrayTest2)); // true
console.log(same(arrayTest1, arrayTest3)); // false
console.log(same(arrayTest1, arrayTest4)); // false
console.log(same(arrayTest4, arrayTest2)); // false


