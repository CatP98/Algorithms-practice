/*
Write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
 */

function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

// Test cases
console.log(power(2, 5)); // 8
/*
power(2,5) = 2 * power(2,4) > 2 * 16 = 32
power(2,4) = 2 * power(2,3) > 2 * 8 = 16
power(2,3) = 2 * power(2,2) > 2 * 4 = 8
power(2,2) = 2 * power(2,1) > 2 * 2 = 4
power(2,1) = 2 * power(2,0) > 2 * 1 = 2
power(2,o) = 1
 */
console.log(power(5, 2)); // 25
console.log(power(10, 0)); // 1
console.log(power(3, 4)); // 81
console.log(power(7, 1)); // 7
