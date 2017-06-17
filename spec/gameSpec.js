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
    expect(game.turnCounter).toEqual(1);
  })
});
