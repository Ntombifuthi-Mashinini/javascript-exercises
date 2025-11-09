const repeatString = function(str, times) {
  if (times < 0) return "ERROR";
  let results = '';
  for (let i = 0; i < times; i++) {
    results += str;
  }
  return results;
};

module.exports = repeatString;

// Do not edit below this line
module.exports = repeatString;
