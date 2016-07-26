
inArray = require "in-array"

diffArrays = (oldArray, newArray) ->

  added = []
  removed = []

  index = -1
  length = oldArray.length
  while ++index < length
    value = oldArray[index]
    if not inArray newArray, value
      removed.push value

  index = -1
  length = newArray.length
  while ++index < length
    value = newArray[index]
    if not inArray oldArray, value
      added.push value

  return {
    added
    removed
  }

module.exports = diffArrays
