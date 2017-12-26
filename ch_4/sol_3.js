// A form of linked list
function arrTolist(arr){
  var list = null
  for(var i = arr.length-1;i >= 0 ;i--){
    list = {value: arr[i], rest: list}
  }
  return list
}
function listToarr(list){
  // arrTolist(arr)
  // called in console.log
  var ar = []
  for(var i = list; i ; list = i.rest){
    ar.push(i.value)
  }
  return ar
}// why cond is need to defined
function prepend (val, list) {
  return {value: val, rest: list}
}
function nth (list, pos){
  if(!list){
    return undefined
  }
  else if(pos == 0){
    return list.value
  }
  else {
    for (var i = list; i <= pos; list = i.rest){
      var val = i.value
    }
    return val
  }
}
console.log(arrTolist([19, 27]))
console.log(listToarr(arrTolist([19, 56, 87])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrTolist([10, 20, 30]), 1))
