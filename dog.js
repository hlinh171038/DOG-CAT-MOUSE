function dog(name)
{
	this.name = name;
 this.stomatch = [];
}
dog.prototype.eat = function(cat) {
	// body...
	this.stomatch.push(cat);
};
module.exports= dog;