var arr = [[ 1, [2, [3, 6]], [4, 5] ], 9]
function flatten (arr) {
  var flatArr = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr = flatArr.concat(flatten(arr[i]))
    }
    else {
      flatArr.push(arr[i])
    }
  }
  return flatArr
}
console.log(flatten(arr))
