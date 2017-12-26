function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
function age(p){return p.died - p.born}
function mother(p){
  byName[p.mother]
}
var per = average(ancestry.map(age))
var mot = average(ancestry.map(mother).map(age))
console.log(mot - per)
//4.448717948717949
//var mot = average(ancestry.forEach(mother).map(age))
