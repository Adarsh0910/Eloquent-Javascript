function countBs(s) {
  return countChar(s, 'B')
}
function countChar(s,c) {
  var count = 0
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) == c) {
      count += 1
     }
   }
  return count
}
console.log(countBs('BBs'))
console.log(countChar('kakkerlak', 'k'))
