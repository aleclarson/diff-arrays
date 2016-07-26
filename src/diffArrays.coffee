
inArray = require "in-array"

diffArrays = (a, b) ->

  values = []

  index = -1
  length = a.length
  while ++index < length
    value = a[index]
    continue if inArray b, value
    values.push value

  index = -1
  length = b.length
  while ++index < length
    value = b[index]
    continue if inArray a, value
    values.push value

  return values

module.exports = diffArrays
