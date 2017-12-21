var size = 7
var board = ''
for (var i = 1; i <= size; i++) {
  for (var j = 1; j <= i; j++) {
    board += '*'
  }
  board += '\n'
}
console.log(board)
