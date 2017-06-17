function Game() {
  this.players = [];
  this.board = [];
  this.turns = 0;
  this.currentPlayer = 'Player 1';
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};

Game.prototype.play = function(marker, x, y) {
  this.validateMove(x, y);
  this.board.push([marker, x, y]);
  this.endTurn();
};

Game.prototype.validateMove = function(x, y) {
  if (this.board.length > 8){
    throw new Error("All turns taken");
  }
  this.checkPosition(x, y);
};

Game.prototype.checkPosition = function(x, y) {
  this.board.forEach(function(move) {
    if (move[1] === x && move[2] === y) {
        throw new Error('Position taken');
    }
  });
}

Game.prototype.endTurn = function() {
  this.turns += 1;
  this.switchPlayer();
};

Game.prototype.switchPlayer = function() {
  if (this.turns % 2 === 0) {
    return this.currentPlayer = 'Player 1'; //jshint ignore:line
  }
  else
    return this.currentPlayer = 'Player 2'; //jshint ignore:line
};
