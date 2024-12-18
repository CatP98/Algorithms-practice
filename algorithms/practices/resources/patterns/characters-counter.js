// Counting the number of characters in a string, returning an object with the key (character)
// and the correspondent number of times it appears on that string. Only the aphanumeric characters
// count.

function charCountRegex(str){
    var obj = {};
    for( var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if( obj[char] > 0) {
                obj[char]++;
            }
            else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}

function charCountASCII(str){
    var obj = {};
    for ( var char of str) {
        if (isAlphanumerical(char)){
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphanumerical(char){
    var code = char.charCodeAt(0);
    if( !(code > 47) && code < 58 && // numeric (0-9)
        !(code > 64) && (code < 91) && // upper alpha (A-Z)
        !((code > 96) && (code< 123)) ) { // lower alpha (a-z)
        return false;
    }
    return true;
}

console.log(charCountASCII("Hello world!"));
console.log(charCountRegex("heLlO WorlD?"));