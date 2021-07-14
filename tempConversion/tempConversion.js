const ftoc = function(input) {
  return (parseFloat(((input - 32)*(5/9)).toFixed(1)))
};

const ctof = function(input) {
  return (parseFloat(((input * (9/5))+32).toFixed(1)))
};

module.exports = {
  ftoc,
  ctof
};
