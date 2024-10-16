// Regex expressions are inconsistent in terms of perfgormance, varying frombrowser to
// browser, so it might be a better solutions to use ASCII code in order to check if a character is alphanumeriucal opr not;

function isAlphanumerical(char){
    var code = char.charCodeAt(0);
    if( !(code > 47) && code < 58 && // numeric (0-9)
        !(code > 64) && (code < 91) && // upper alpha (A-Z)
        !((code > 96) && (code< 123)) ) { // lower alpha (a-z)
        return false;
    }
    return true;
}
