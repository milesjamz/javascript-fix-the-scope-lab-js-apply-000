var animal = ['dog', 'cat'];

function myAnimal() {
  return animal[0]
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal[1]
}

 function add2(n) {
 var two = 2
  return n + two;
}


var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
var theFunk = funkyFunction()()