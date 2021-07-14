const removeFromArray = function(...args) {
    
    let result = args[0];
    let valuesToRemove = args.slice(1);
    let len = valuesToRemove.length;
    
    for(let i = 0; i < len; i++){
        result = result.filter(value => !(value === valuesToRemove[i]));
    }
    return result;
};

module.exports = removeFromArray;
