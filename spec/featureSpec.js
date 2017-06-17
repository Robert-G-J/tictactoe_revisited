describe("Feature Test:", function() {
  var player1;
  var player2;
  var game;

  beforeEach(function() {
    game = new Game();
    player1 = new Player();
    player2 = new Player();
  });

  it(' There are two players in the game', function() {
    game.addPlayer(player1);
    game.addPlayer(player2);
    expect(game.players).toEqual([player1, player2]);
  });

});
