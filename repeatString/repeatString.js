const repeatString = function(string, timesToRepeat) {
    if(timesToRepeat<0){
        return "ERROR";
    }

    result = ""
    
    for (let i = 0; i < timesToRepeat; i++){
        result+= string;
    }
    return result;
};

module.exports = repeatString;
