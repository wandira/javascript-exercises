const leapYears = function(year) {
    if(year%4==0){

        if(year%100==0){ //if century years
            if(year%400==0){
                return true;
            }
            return false;
        }

        return true; //non century years-> just dividable by 4 means it is leap year
    }

    return false; // not dividable by 4 at all
};

module.exports = leapYears;
