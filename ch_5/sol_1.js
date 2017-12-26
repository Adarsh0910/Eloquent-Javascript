var arr = [[1,2,3],[2,3,5],[4,6,8]]
function plus(a,b){
  return a.concat(b)
}
console.log(arr.reduce(plus))
