const sumAll = function(start,end) {
    //isNaN coerces string into number, so cannot be used here
    if(typeof start != "number"||typeof end != "number") return 'ERROR';
    if(start<0||end<0) return 'ERROR';
    if(start==end) return start;

    let temp= 0;
    if(start>end){
        temp= start;
        start= end;
        end= temp;
    }

    let result=0;
    for(;start<=end;start++){
        result=result+start
    }
    return result;
};

module.exports = sumAll;
