var Player = function(xSpawn, ySpawn, facing, id, color, address = "") {
	this.xSpawn = xSpawn;
	this.ySpawn = ySpawn;
	this.x = xSpawn;
	this.y = ySpawn;
	this.facing = facing;
	this.customId = id;
	this.color = color;
	this.adress = address;
	this.wins = 0;
	
	this.alive = true;

	this.bombStrength = 1;
	this.bombCapacity = 3;
	this.numBombsAlive = 0;
}

Player.prototype = {
	resetForNewRound: function() {
		this.x = this.xSpawn;
		this.y = this.ySpawn;
		this.facing = "down";
		this.alive = true;
		this.bombStrength = 1;
		this.bombCapacity = 3;
		this.numBombsAlive = 0;
	}
}

module.exports = Player;