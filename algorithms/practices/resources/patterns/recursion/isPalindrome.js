/*
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
(reads the same forward and backward). Otherwise it returns false.

Examples:
isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false

 */

function isPalindrome(str){
     // Base Case
    if(str.length <= 1) return true; // because an empty or single-character string is a palindrome
    // Recursive Case
    if(str[0] === str[str.length -1]){
        return isPalindrome(str.slice(1,-1)); // slice(1,-1) removes the outer characters
    }
    else {return false;}
}

console.log(isPalindrome('awesome'));// false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat'));// true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false