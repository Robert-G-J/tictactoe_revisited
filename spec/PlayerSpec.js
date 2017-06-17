describe("A Player:", function() {
  var player1;

  beforeEach(function() {
    player1 = new Player('Rob');
  });

  it("player has a name", function() {
    expect(player1.name).toBe("Rob");
  });

});
