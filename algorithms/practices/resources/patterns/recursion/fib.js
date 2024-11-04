/*
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
and where every number thereafter is equal to the sum of the previous two numbers.
 */

function fib(n){
    if(n <= 2) return 1;
    return fib (n - 1) + fib(n - 2);
}

//Test Cases:
console.log(fib(4)); // 3
/*
fib(4) = fib(3) + fib(2)   > 2 + 1 = 3 <
fib(3) = fib(2) + fib(1) = 1 + 1 = 2   > 2

 */
console.log(fib(10)); // 55
/*
fib(10) calls fib(9) and fib(8)                                   = 55
fib(9) calls fib(8) and fib(7)                                      ^
fib(8) calls fib(7) and fib(6)                                      ^
fib(7) calls fib(6) and fib(5)                                      ^
fib(6) calls fib(5) and fib(4) > 3 + 5 = 8                          ^
fib(5) calls fib(4) and fib(3) > 3 + 2 = 5                          ^
fib(4) calls fib(3) and fib(2) > 2 + 1 = 3                          ^
fib(3) calls fib(2) and fib(1) > 2                                  ^
fib(2) and fib(1) are the base cases, so they return 1. > 1 + 1 = 2 ^
 */
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
