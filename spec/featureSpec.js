describe("Feature Test:", function() {
  var player1;
  var player2;
  var game;

  beforeEach(function() {
    game = new Game();
    player1 = new Player();
    player2 = new Player();
    game.addPlayer(player1);
    game.addPlayer(player2);
  });

  it("There are two players in the game", function() {
    expect(game.players).toEqual([player1, player2]);
  });

  it("Players take turns until the game is over", function() {
    game.play('x', 0, 0);
    game.play('o', 1, 1);
    game.play('x', 2, 1);
    game.play('o', 0, 2);
    game.play('x', 2, 0);
    game.play('o', 1, 0);
    game.play('x', 1, 2);
    game.play('o', 2, 2);
    game.play('x', 0, 1);
    expect(function(){ game.play('o', 2, 2); }).toThrowError("All turns taken");
  });

  it("A player cannot claim a field if it is already taken", function() {
    game.play('x', 0, 0);
    expect(function(){ game.play('o', 0, 0); }).toThrowError("Position taken");
  });

});

//   0 1 2
// 0 x o x
// 1   o x
// 2 o x
