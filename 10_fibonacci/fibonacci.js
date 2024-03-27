const fibonacci = function(number) {
    if (typeof number !== 'number'){
        number = parseInt(number);
    }
    if (number < 0 || number === NaN){
        return "OOPS"
    }
    let a = 0;
    let b = 1;
    if (number === 0){
        return a
    }
    for (let i = 1; i < number; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b
};

// Do not edit below this line
module.exports = fibonacci;
