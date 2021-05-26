const repeatString = function(str,loop) {
    if(loop<0) return 'ERROR';
    if(loop==0||str=='') return '';

    let final = '';

    while(loop>0){
        final = final+str;
        loop--;
    }
    return final;

};

module.exports = repeatString;
