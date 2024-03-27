const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arrOfNum) {
	return arrOfNum.reduce((sum, num) => {
    return sum + num
  }, 0)
};

const multiply = function(arrOfNum) {
  return arrOfNum.reduce((product, num) => {
    return product * num
  }, 1)
};

const power = function(num, pow) {
	return num ** pow
};

const factorial = function(num) {
	let factorial = 1;
  for (let i = 2; i <= num; i++){
    factorial *= i;
  }
  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
