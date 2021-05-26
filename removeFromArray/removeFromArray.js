//https://levelup.gitconnected.com/how-to-write-function-with-n-number-of-parameters-in-javascript-a916de1be7a2s
const removeFromArray = function(arr, ...args) {
    
    function haveNoMatch (entry) {
        for(let i=0;i<args.length;i++){
            if(entry===args[i]){
                return false;
            }
        }
        return true;
    }
    const result = arr.filter(haveNoMatch);
    return result;

};

module.exports = removeFromArray;
