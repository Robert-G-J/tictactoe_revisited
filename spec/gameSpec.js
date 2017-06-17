describe("Game:", function() {
  var player1;
  var player2;
  var game;

  beforeEach(function() {
    game = new Game();
    player1 = new Player('X');
    player2 = new Player('O');
  });

  it('A game can contain players', function() {
    expect(game.players).toEqual([]);
  });

  it("a game can add two players", function() {
    game.addPlayer(player1);
    expect(game.players).toContain(player1);
  });

});
