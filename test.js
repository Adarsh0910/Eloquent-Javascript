function filter (arr, callback) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(callback(arr[i]))
    }
  }
  return newArr
}
function map (arr, callback){
  var res = []
  for(var i = 0; i < arr.length; i++){
    res.push(callback(arr[i]))
  }
  return res
}
function reduce(arr, callback, start=0){ // start || 0
  var res = 1
  for (var i = 0; i < arr.length; i++){
    res = callback(res, arr[i])
  }
  return res
}
var arr = [10, 3, 69, 64, 99]
console.log(filter(arr, function (i) {
  if (i > 10) {
    return i
  }
}))
console.log(map(arr, factorial))
function factorial (elm) {
  if (elm == 0 || elm == 1) {
    return 1
  }
  else {
    return elm * factorial(elm - 1)
  }
}
console.log(reduce(arr, function (res, i) {
  return res * i
}, 0))
