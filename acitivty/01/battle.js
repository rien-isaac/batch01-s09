class Battle {
  constructor(pokemon1, pokemon2) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  startBattle() {
    console.log(
      `The battle between ${this.pokemon1.name} and ${this.pokemon2.name} has started`
    );

    while (this.pokemon1.hp > 0 && this.pokemon2.hp > 0) {
      this.pokemon1.attack(this.pokemon2);
      if (this.pokemon2.hp > 0) {
        this.pokemon2.attack(this.pokemon1);
      }
    }

    if (this.pokemon1.hp <= 0) {
      console.log(`${this.pokemon1.name} has lost the battle.`);
    } else {
      console.log(`${this.pokemon2.name} has lost the battle.`);
    }
  }
}
