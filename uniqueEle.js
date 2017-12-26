var arr = [1, 2, 3, 2, 1, 4, 3, 5, 5]
function uniqueEle (ar) {
  var newArr = ar.sort()
  var start = newArr[0]
  var count = 0
  for (var i = 0; i < ar.length; i++) {
    if (newArr[i] === start) count++
    else if (newArr[i] !== start && count === 1) return newArr[i - 1]
    else {
      start = newArr[i]
      count = 1
    }
  }
}
console.log(uniqueEle(arr))
// n(for loop worst case) + nlogn(for sorting)
