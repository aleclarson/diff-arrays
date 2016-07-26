var diffArrays, inArray;

inArray = require("in-array");

diffArrays = function(a, b) {
  var index, length, value, values;
  values = [];
  index = -1;
  length = a.length;
  while (++index < length) {
    value = a[index];
    if (inArray(b, value)) {
      continue;
    }
    values.push(value);
  }
  index = -1;
  length = b.length;
  while (++index < length) {
    value = b[index];
    if (inArray(a, value)) {
      continue;
    }
    values.push(value);
  }
  return values;
};

module.exports = diffArrays;

//# sourceMappingURL=map/diffArrays.map
