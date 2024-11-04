/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'
 */

function reverse(str){
    // Base Case: If the string is empty (str === ""), return an empty string.
    if(str.length === 0) return "";
    // Recursive Case: Take the last character of the string and concatenate it with the result of calling reverse on the remaining substring
    // return reversed.concat(str.length - 1 + reverse(str.slice(1)));
    return reverse(str.slice(1)) + str[0] ;
}
console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool'));// 'loohcsmhtir'
console.log(reverse('ana'));
console.log(reverse('catarina'));

/*
reverse(catarina) calls reverse(atarina) + c => "anirata" + c === "aniratac
reverse(atarina) calls reverse(tarina) + a   => "anirat" + a
reverse(tarina) calls reverse(arina) + t     => "anira" + t
reverse(arina) calls reverse(rina) + a       => "anir" + a
reverse(rina) calls reverse(ina) + r         => "ani" + r
reverse(ina) calls reverse(na) + i           => "an" + i
reverse(na) calls reverse(a) + n             => "a" + n
reverse(a) calls reverse() + a               => "" + a
reverse() returns ""                         => ""

 */