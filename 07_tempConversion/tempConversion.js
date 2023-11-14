const convertToCelsius = function(tempInF) {
  let tempInC = (tempInF - 32) * 5 / 9;
  let roundedTempInC = Math.round(tempInC * 10) / 10;
  return roundedTempInC;
};

const convertToFahrenheit = function(tempInC) {
  let tempInF = (tempInC * 9 / 5 + 32);
  let roundedTempInF = Math.round(tempInF * 10) / 10;
  return roundedTempInF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
