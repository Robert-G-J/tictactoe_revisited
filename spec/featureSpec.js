'use strict';

describe("Feature Test:", function() {


  beforeEach(function() {
    var player1, player2, game;
    game = new Game();
    player1 = new Player('X');
    player2 = new Player('O');
  })

  it(' There are two players in the game', function() {
    expect(game.players).toEqual([player1, player2]);
  });
})
