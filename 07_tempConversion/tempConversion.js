const convertToCelsius = function(temp) {

  let celcius = (temp - 32) * 5/9
  let resultRounded = Math.round(celcius*10) / 10

  return resultRounded
};

const convertToFahrenheit = function(temp) {

  let farenheit = (temp * 9/5) + 32
  let resultRounded = Math.round(farenheit*10) / 10

  return  resultRounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
