function cat()
{
	this.stomatch = [];
}
cat.prototype.eat = function (mouse)
{
	this.stomatch.push(mouse);
}
module.exports = cat;