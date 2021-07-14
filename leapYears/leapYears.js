const leapYears = function(yearToEvaluate) {
    if (yearToEvaluate % 4 != 0){
        return false;
    } else if (yearToEvaluate % 100 == 0 && yearToEvaluate % 400 !=0){
        return false;
    } else {
        return true;
    }
};


module.exports = leapYears;
