const ftoc = function(fahrenheit) {
  const exactCelcius = (fahrenheit-32) / 9 * 5;
  let roundedCelcius = Math.round(exactCelcius * 10) / 10;
  return roundedCelcius;
};

const ctof = function(celcius) {
  const exactFahrenheit = celcius / 5 * 9 + 32;
  let roundedFahrenheit = Math.round(exactFahrenheit * 10) / 10;
  return roundedFahrenheit;

};

module.exports = {
  ftoc,
  ctof
};
