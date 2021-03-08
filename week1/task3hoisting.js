/*
Hoisting is the way the program reads the declarations of variables.
They are read before reading the code, and 'hoisted' to the top of
the code. Therefore, it can be accesed by the system as a declaration.
But the value cannot be read, if it hasn't been set before it's used.

Another rule with functions is that when you name a function, it is
hoisted to the top of the code, and can be called anywhere, no matter
the place. But if you make an anonymous function and assign it to
a variable, then it has the same behaviour as a variable.
*/

var a = "First";
var b = "Second";
var c = "Third";

console.log(a + " " + b + " " + c + " " + d);

d = "Fourth";

console.log(a + " " + b + " " + c + " " + d);

var d;

console.log(example());

function example() {
  var a = 10;
  return a;
}

//This will create an error
//console.log(a());

var a = function () {
  var a = 10;
  return a;
};

console.log(a());
