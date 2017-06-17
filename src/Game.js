function Game() {
  this.players = [];
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};
