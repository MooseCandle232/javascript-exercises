const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });

  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  numbers.forEach((number) => {
    product *= number;
  });

  return product;
};

const power = function(num1, num2) {
  let power = Math.pow(num1, num2);
	return power;
};

const factorial = function(number) {
  let num = number;
	let factorial = 1;

  while(num > 0) {
    factorial *= num;
    num--;
  }

  return factorial;
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
