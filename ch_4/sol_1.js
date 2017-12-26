function range (start, end, jump){
  var arr = []
  if(jump == undefined){
    jump = 1
  }
  if(jump < 0){
    return range(end,start,-jump)
  }
  for(var i = start;i <= end;i += jump){
    arr.push(i)
  }
  return arr
}
function sum(arr){
  var sum = 0
  for(var i = 0;i < arr.length; i++){
    sum += arr[i]
  }
  return sum
}
console.log(range(1, 10))
console.log(range(1, 10, 2))
console.log(range(5, 2, -1))
console.log(sum(range(1, 10, 2)))
