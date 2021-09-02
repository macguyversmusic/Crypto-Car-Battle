var Mint = {
  preload: function () {
    game.load.image(
      "mintbg",
      "./assets/images/mintbg.png"
    );
    game.load.image(
      "mintbutton",
      "./assets/images/mintbutton.png"
    );
    game.load.image(
      "homebutton",
      "./assets/images/homebutton.png"
    );
  },

  create: function () {
    game.add.sprite(0, 0, "mintbg");
    this.add.button(300, 400, "mintbutton", this.mintSpaceShip, this);
    this.add.button(1180, 10, "homebutton", this.home, this);
  },

  mintSpaceShip: function () {
    contract.methods
      .mintSpaceShip()
      .send({ from: web3.eth.defaultAccount })
      .then(function (res) {
        console.log(res, "MINTED");
        game.state.start('CarsListLoader');
      });
  },

  home: function () {
    game.state.start('Login');
  }
};
