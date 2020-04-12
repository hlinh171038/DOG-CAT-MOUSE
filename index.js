var Dog = require('./dog.js');
var Cat = require('./cat.js');
var ogy = new Dog('ogy');
var tom = new Cat();
ogy.eat(tom);
console.log(ogy);