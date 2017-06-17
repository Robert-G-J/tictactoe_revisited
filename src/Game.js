function Game() {
  this.players = [];
  this.board = [];
  this.turnCounter = 0;
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};

Game.prototype.play = function(marker, x, y) {
  var move = [marker, x, y];
  this.board.push(move);
  this.turnCounter += 1;
};
