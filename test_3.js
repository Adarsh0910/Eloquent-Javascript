var arr = [[ 1, [2, [3, 6]], [4, 5] ], 9]
function filter (arr, callback) {
  var filArr = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      filArr = filArr.concat(filter(arr[i], callback))
    }
    else {
      if (!isNaN(callback(arr[i]))) {
        filArr.push(callback(arr[i]))
      }
    }
  }
  return filArr
}
function reduce (arr, callback, start) {
  var result = 0
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      reduce(arr[i], callback, start)
    }
    else {
      result = result + callback(arr[i])
    }
  }
  return result
}
console.log(filter(arr, function (ele) {
  if (ele >= 2 && ele <= 6) {
    return ele
  }
}))
console.log(reduce(arr, function (ele) {
  var mulEle = 1
  for (var i = 0; i < ele; i++) {
    mulEle = mulEle * ele
  }
  return mulEle
}, 0))
