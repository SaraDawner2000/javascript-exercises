const repeatString = function(string, amount) {
    if (amount < 0){
        return "ERROR"
    }else{
        return string.repeat(amount)
    }
};

// Do not edit below this line
module.exports = repeatString;
