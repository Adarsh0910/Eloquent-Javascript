function reverseArray(arr) {
  var rev = []
  var j = arr.length-1
  for(var i = 0;i < arr.length;i++){
    if(j >= 0){
      rev[i] = arr[j]
      j--
    }
  }
  return rev
}
function reverseArrayInPlace(arrayValue){
  arrayValue = reverseArray(arrayValue)
  return arrayValue
}
console.log(reverseArray(['A', 'B', 'C']))
var arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
