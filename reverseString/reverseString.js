const reverseString = function(str) {
    if (str=='') return '';

    let len = str.length-1;
    let final = '';

    while(len>-1) {
        final = final + str[len];
        len--;
    }
    return final;
};

module.exports = reverseString;
