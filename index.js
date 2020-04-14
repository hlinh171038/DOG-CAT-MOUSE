var Dog = require('./dog.js');
var Cat = require('./cat.js');
var dog = new Dog('ichi-ko');
var cat = new Cat();
try
{
	cat.eat(dog);
console.log(cat);
}
catch(err)
{
	console.log('err while cat eat' );
}


