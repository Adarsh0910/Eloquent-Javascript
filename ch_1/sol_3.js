var size = 7;
var patt = '';
for (var i = 0; i < size; i++){
  for(var j = 0; j < size;j++){
    if((i+j) % 2 == 0){
      patt += ' ';
    }
    else {
      patt += '#';
    }
  }
  patt += '\n';
}
console.log(patt);
