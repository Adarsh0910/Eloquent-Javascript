function reverse(arr){
  var rev = []
  for(var i = arr.length-1; i >= 0; i--){
    rev.push(arr[i])
  }
  return rev
}
function reverseInPlace(array){
  var temp
  for(var i =0; i < Math.floor(array.length/2); i++){
    temp = array[i]
    array[i] = array[array.length-1-i]
    array[array.length-1-i] = temp
  }
  return array
}
console.log(reverse(['A', 'B', 'C']))
var array = [1, 2, 3, 4, 5]
reverseInPlace(array)
console.log(array)
