const reverseString = function(str) {
    let result = [];
    for (let i = 0; i < str.length; i++){
        result.unshift(str[i]);
    }
    return result.join("");
};

module.exports = reverseString;
