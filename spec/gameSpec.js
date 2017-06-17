describe("A Game:", function() {
  var player1;
  var player2;
  var game;

  beforeEach(function() {
    game = new Game();
    player1 = new Player('Rob');
    player2 = new Player('Chris');
    game.addPlayer(player1);
    game.addPlayer(player2);
  });

  it("can contain a player", function() {
    expect(game.players).toContain(player1);
  });

  it("can be played", function() {
    game.play('x', 0, 0);
    expect(game.board).toContain(['x', 0, 0]);
  });

  it("has turns", function() {
    game.play('x', 0, 0);
    expect(game.turns).toEqual(1);
  });

  it("has a current player", function() {
    game.play('x', 1, 1);
    expect(game.currentPlayer).toBe('Chris');
  });

  it("has unique moves in the board", function() {
    game.play('x', 0, 0);
    expect(function() { game.play('o', 0, 0); }).toThrowError('Position taken');
  });

  it("has a defined board size", function() {
    expect(function() { game.play('x', 3, 0); }).toThrowError('Position invalid');
  });

  it("A player wins if they claim all the fields in a row", function() {
    game.play("x", 0, 0);
    game.play("o", 0, 1);
    game.play("x", 1, 0);
    game.play("o", 0, 2);
    expect(game.play("x", 2, 0)).toEqual("Game over! Player 1 wins");
  });

});


function Helpers() {
  game = new Game();
  player1 = new Player("Rob");
  player2 = new Player("Chris");
  game.addPlayer(player1);
  game.addPlayer(player2);
  game.play('x', 0, 0);
  game.play('o', 1, 1);
  game.play('x', 2, 1);
  game.play('o', 0, 2);
  game.play('x', 2, 0);
}

function Rowgame() {
  game = new Game();
  player1 = new Player("Rob");
  player2 = new Player("Chris");
  game.addPlayer(player1);
  game.addPlayer(player2);
  game.play("x", 0, 0);
  game.play("o", 0, 1);
  game.play("x", 1, 0);
  game.play("o", 0, 2);
  game.play("x", 2, 0);
}
