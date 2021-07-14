const sumAll = function(num1, num2) {
    let min = 0;
    let max = 0;
    let sum = 0;
    
    if(typeof(num1)!= "number" | typeof(num2)!= "number" | num1*num2 < 0){
        return "ERROR";
    }

    if (num1>num2){
        max = num1;
        min = num2;
    }else {
        max = num2;
        min = num1;
    }

    for(min; min <= max; min++) {
        sum += min;
    }
    return sum;
};

module.exports = sumAll;
