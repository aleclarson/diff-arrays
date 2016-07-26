var diffArrays, inArray;

inArray = require("in-array");

diffArrays = function(oldArray, newArray) {
  var added, index, length, removed, value;
  added = [];
  removed = [];
  index = -1;
  length = oldArray.length;
  while (++index < length) {
    value = oldArray[index];
    if (!inArray(newArray, value)) {
      removed.push(value);
    }
  }
  index = -1;
  length = newArray.length;
  while (++index < length) {
    value = newArray[index];
    if (!inArray(oldArray, value)) {
      added.push(value);
    }
  }
  return {
    added: added,
    removed: removed
  };
};

module.exports = diffArrays;

//# sourceMappingURL=map/diffArrays.map
