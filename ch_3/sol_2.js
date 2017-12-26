function isEven(n){
  if(n % 2 == 0) {
    return true;
  }
  else if (n < 0) {
    return isEven(-n)
  }
  else {
    return false;
  }
}
console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
