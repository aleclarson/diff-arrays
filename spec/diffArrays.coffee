
diffArrays = require ".."

describe "diffArrays()", ->

  it "returns the values that are only in one of the arrays", ->
    result = diffArrays [ 1, 2, 3 ], [ 2, 3, 4, 5 ]
    expect result
      .toEqual [ 1, 4, 5 ]
