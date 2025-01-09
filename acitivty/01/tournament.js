class Tournament {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.winner;
    this.loser;
  }

  battle() {
    //selects the pokemon of trainer 1
    for (
      let selector1 = 0;
      selector1 < this.trainer1.pokemonList.length;
      selector1++
    ) {
      if (this.trainer1.pokemonList[selector1].hp > 0) {
        console.log(
          `${this.trainer1.name} selects ${this.trainer1.pokemonList[selector1].name}`
        );
        // console.log(this.team1[selector1]);

        //selects the pokemon of trainer 2
        for (
          let selector2 = 0;
          selector2 < this.trainer2.pokemonList.length;
          selector2++
        ) {
          if (
            this.trainer2.pokemonList[selector2].hp > 0 &&
            this.trainer1.pokemonList[selector1].hp > 0
          ) {
            console.log(
              `${this.trainer2.name} selects ${this.trainer2.pokemonList[selector2].name}`
            );
            // console.log(this.team2[selector2]);

            while (
              this.trainer1.pokemonList[selector1].hp > 0 &&
              this.trainer2.pokemonList[selector2].hp > 0
            ) {
              this.trainer1.pokemonList[selector1].attack(
                this.trainer2.pokemonList[selector2]
              );

              if (this.trainer2.pokemonList[selector2].hp > 0) {
                this.trainer2.pokemonList[selector2].attack(
                  this.trainer1.pokemonList[selector1]
                );
              }

              //start for healing

              if (
                this.trainer1.pokemonList[selector1].hp < 6 &&
                this.trainer1.pokemonList[selector1].hp > 2
              ) {
                this.trainer1.pokemonList[selector1].heal();
              }

              if (
                this.trainer2.pokemonList[selector2].hp < 10 &&
                this.trainer2.pokemonList[selector2].hp > 1
              ) {
                this.trainer2.pokemonList[selector2].heal();
              }

              //end for healing

              if (this.trainer1.pokemonList[selector1].hp <= 0) {
                console.log(`********`);
                console.log(
                  `%c${this.trainer2.name}`,
                  `color: #0000ff`,
                  `'s${this.trainer2.pokemonList[selector2].name} has won the battle.`
                );
                console.log(`********`);
                //set team 2 as the winner...
                break;
              } else {
                console.log(`********`);
                console.log(
                  `%c${this.trainer1.name}`,
                  `color: #ee4b2b`,
                  `'s ${this.trainer1.pokemonList[selector1].name} has won the battle.`
                );

                console.log(`********`);
                break;
                //set team 1 as the winner...
              }
            }
          }
        }
      }
    }
    let teamOneTotalHp = 0;
    let teamTwoTotalHp = 0;

    //winner checker

    //team 1 total hp
    for (let i = 0; i < this.trainer1.pokemonList.length; i++) {
      teamOneTotalHp += this.trainer1.pokemonList[i].hp;
    }

    //team 2 total hp
    for (let i = 0; i < this.trainer2.pokemonList.length; i++) {
      teamTwoTotalHp += this.trainer2.pokemonList[i].hp;
    }

    if (teamOneTotalHp > teamTwoTotalHp) {
      this.winner = this.trainer1;
      this.loser = this.trainer2;
      // console.log(this.trainer1);
      console.log(`%c${this.trainer1.name} is the winner.`, `color: #00ff00`);
      console.log(`********`);
    } else {
      this.winner = this.trainer2;
      this.loser = this.trainer1;
      // console.log(this.trainer2);
      console.log(`%c${this.trainer2.name} is the winner.`, `color: #0000ff`);
      console.log(`********`);
    }
  }
}
