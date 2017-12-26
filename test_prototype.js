function Array1 () {}
var arr = new Array1()
// arr = Object.create(Array1)
arr.val = [2, 3, 5, 7]
Array1.prototype.filterg = function (callback) {
  var newArr = []
  for (var i = 0; i < this.val.length; i++) {
    if (callback(this.val[i])) {
      newArr.push(callback(this.val[i]))
    }
  }
  return newArr
}
console.log(arr.filterg(function (ele) {
  if (ele < 5) return ele
}
)
)
// console.log(Array1.prototype.filterg.call([1, 3, 6, 7], function (ele) {
  // if (ele < 5) return ele
// }))
