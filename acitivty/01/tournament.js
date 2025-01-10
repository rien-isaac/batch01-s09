class Tournament {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.winner;
    this.loser;
  }

  battle() {
    //revive pokemons if the trainer satisfied the level condition
    let levelCondition = 2;
    if (this.trainer1.level >= levelCondition) {
      this.trainer1.revivePokemons();
    }

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
      //pokemon selector trainer 2
      while (
        selector2 < this.trainer2.pokemonList.length &&
        this.trainer2.pokemonList[selector2].hp > 0
      ) {
        //battle
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
            // this.trainer1.pokemonList[selector1].heal();
          }

          if (
            this.trainer2.pokemonList[selector2].hp < 10 &&
            this.trainer2.pokemonList[selector2].hp > 1
          ) {
            // this.trainer2.pokemonList[selector2].heal();
          }

          //end for healing

          if (this.trainer1.pokemonList[selector1].hp <= 0) {
            console.log(`********`);
            console.log(
              `%c${this.trainer2.name}`,
              `color: #0000ff`,
              `'s${this.trainer2.pokemonList[selector2].name} has won the battle.`
            );

            this.trainer2.pokemonList[selector2].levelUp();
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

            this.trainer1.pokemonList[selector1].levelUp();

            console.log(`********`);
            break;
            //set team 1 as the winner...
          }
        }

        selector2++;
      }

      selector1++;
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

      this.winner.levelUp();
      console.log(`********`);
    } else {
      this.winner = this.trainer2;
      this.loser = this.trainer1;
      // console.log(this.trainer2);
      console.log(`%c${this.trainer2.name} is the winner.`, `color: #0000ff`);
      this.winner.levelUp();
      console.log(`********`);
    }
  }
}
