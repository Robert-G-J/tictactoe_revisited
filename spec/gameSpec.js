describe("A Game:", function() {
  var player1;
  var player2;
  var game;

  beforeEach(function() {
    game = new Game();
    player1 = new Player('X');
    player2 = new Player('O');
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
    expect(game.currentPlayer).toBe('Player 2');
  });

  it("has unique moves in the board", function() {
    game.play('x', 0, 0);
    expect(function() { game.play('o', 0, 0); }).toThrowError('Position taken');
  });
});

function Helpers () {
  game = new Game();
  player1 = new Player();
  player2 = new Player();
  game.addPlayer(player1);
  game.addPlayer(player2);
  game.play('x', 0, 0);
  game.play('o', 1, 1);
  game.play('x', 2, 1);
  game.play('o', 0, 2);
  game.play('x', 2, 0);
}
