var Mouse = require('./mouse');
function cat()
{
	this.stomatch = [];
}
cat.prototype.eat = function(animal) {
	if(animal instanceof Mouse)
	{
		this.stomatch.push(animal);
	}
	else
	{
		throw new Error('Cat can only eat Mouse');
	}
	
};
module.exports = cat;