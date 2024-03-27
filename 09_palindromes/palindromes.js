const palindromes = function (string) {
    testString = string.replace(/[\W\s]/g, "").toLowerCase()
    return testString === reverseString(testString)
};

function reverseString(string) {
    return string.split('').reverse().join('')
};


// Do not edit below this line
module.exports = palindromes;
