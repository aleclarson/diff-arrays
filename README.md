
# diff-arrays v2.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

```coffee
diffArrays = require "diff-arrays"

oldArray = [ 1, 2 ]
newArray = [ 2, 3 ]

results = diffArrays oldArray, newArray

results.added   # => [ 1 ]
results.removed # => [ 3 ]
```
