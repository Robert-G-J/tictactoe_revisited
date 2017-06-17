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
  console.log(this.board);
  this.board.push([marker, x, y]);
  console.log(this.board);
  this.endTurn();
  this.filter();
};

Game.prototype.endTurn = function() {
  this.turns += 1;
  this.switchPlayer();
};

Game.prototype.filter = function() {
  var x = [];
  this.board.forEach(function(move) {
    if (move[0] === 'x') {
      x.push(move);
    }
  });
  this.gameOver(x);
}


Game.prototype.gameOver = function(x) {
  if (x[0][2] === x[1][2] && x[0][2] === x[2][2]) {
		return "Game over! Player 1 wins";
  }
};

Game.prototype.validateMove = function(x, y) {
  if (this.board.length > 8){
    throw new Error("All turns taken");
  }
  this.checkPosition(x, y);
};

Game.prototype.checkPosition = function(x, y) {
  this.validPosition(x, y);
  this.positionTaken(x, y);
};

Game.prototype.validPosition = function(x, y) {
  if (x > 2 || y > 2) {
    throw new Error("Position invalid");
  }
};

Game.prototype.positionTaken = function(x, y) {
  this.board.forEach(function(move) {
    if (move[1] === x && move[2] === y) {
        throw new Error('Position taken');
    }
  });
};

Game.prototype.switchPlayer = function() {
  if (this.turns % 2 === 0) {
    return this.currentPlayer = this.players[0].name; //jshint ignore:line
  }
  else
    return this.currentPlayer = this.players[1].name; //jshint ignore:line
};
