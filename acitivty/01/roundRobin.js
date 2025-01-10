class RoundRobin extends Tournament {
  constructor(trainer1, trainer2) {
    super(trainer1, trainer2);
  }
  // overide battle function
  battle() {
    //revive pokemons if the trainer satisfied the level condition
    console.log(`${this.trainer1.name}: LVL: ${this.trainer1.level}`);

    let levelCondition = 2;
    if (this.trainer1.level >= levelCondition) {
      this.trainer1.revivePokemons();
    }
    console.log(`${this.trainer2.name}: LVL: ${this.trainer2.level}`);
    if (this.trainer2.level >= levelCondition) {
      this.trainer2.revivePokemons();
    }

    //while loop implementation
    let selector1 = 0;
    let selector2 = 0;

    //pokemon selector trainer 1
    while (
      selector1 < this.trainer1.pokemonList.length &&
      this.trainer1.pokemonList[selector1].hp > 0
    ) {
      if (this.trainer1.pokemonList[selector1].hp > 0) {
        console.log(
          `${this.trainer1.name} selects ${this.trainer1.pokemonList[selector1].name}`
        );
        if (
          this.trainer1.pokemonList[selector1].hp >
          this.trainer1.pokemonList[selector1].maxHp
        ) {
          this.trainer1.pokemonList[selector1].hp =
            this.trainer1.pokemonList[selector1].maxHp;
        }

        //pokemon selector trainer 2
        while (
          selector2 < this.trainer2.pokemonList.length &&
          this.trainer2.pokemonList[selector2].hp > 0
        ) {
          if (this.trainer2.pokemonList[selector2].hp > 0) {
            console.log(
              `${this.trainer2.name} selects ${this.trainer2.pokemonList[selector2].name}`
            );
            if (
              this.trainer2.pokemonList[selector2].hp >
              this.trainer2.pokemonList[selector2].maxHp
            ) {
              this.trainer2.pokemonList[selector2].hp =
                this.trainer2.pokemonList[selector2].maxHp;
            }

            while (
              this.trainer1.pokemonList[selector1].hp > 0 &&
              this.trainer2.pokemonList[selector2].hp > 0
            ) {
              //attack pokemon 2 if there's still hp left
              this.trainer1.pokemonList[selector1].attack(
                this.trainer2.pokemonList[selector2]
              );

              //attack pokemon 1 if there's still hp left
              if (this.trainer2.pokemonList[selector2].hp > 0) {
                this.trainer2.pokemonList[selector2].attack(
                  this.trainer1.pokemonList[selector1]
                );
              }

              //did the attacked pokemon's hp satisfied the condition for healing?
              //start for healing

              if (this.trainer2.pokemonList[selector2].hp > 0) {
                if (
                  this.trainer2.pokemonList[selector2].hp < 6 &&
                  this.trainer2.pokemonList[selector2].hp > 2
                ) {
                  this.trainer2.pokemonList[selector2].heal();
                }
              } else {
                console.log(`********`);
                console.log(
                  `%c${this.trainer1.name}`,
                  `color: #ee4b2b`,
                  `'s ${this.trainer1.pokemonList[selector1].name} has won the battle.`
                );

                this.trainer1.pokemonList[selector1].levelUp();

                console.log(`********`);
                selector2++; //select another pokemon for trainer 2
                break;
              }

              //end for healing
            }
          }

          selector2++;
          break;
        }
      }

      selector1++;
      break;
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
      this.trainer1.roundRobinScore++;
      this.loser = this.trainer2;
      // console.log(this.trainer1);
      console.log(`********`);
      console.log(
        `%c${this.trainer1.name} Won and 🔼LEVEL UP.`,
        `color: #00ff00;`,
        `🎉🎊🥳`
      );
      console.log(`********`);

      this.winner.levelUp();
    } else {
      this.winner = this.trainer2;
      this.trainer2.roundRobinScore++;
      this.loser = this.trainer1;
      // console.log(this.trainer2);

      console.log(`********`);
      console.log(
        `%c${this.trainer2.name} Won and 🔼LEVEL UP.`,
        `color: #0000ff;`,
        `🎉🎊🥳`
      );
      console.log(`********`);

      this.winner.levelUp();
    }
  }
}
