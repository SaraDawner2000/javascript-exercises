const sumAll = function(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0){
        return "ERROR"
    }
    let sum = 0;
    if (min > max) [min, max] = [max, min];

    for(i = min; i <= max; i++){
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
