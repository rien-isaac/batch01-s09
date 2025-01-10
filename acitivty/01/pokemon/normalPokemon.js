class NormalPokemon extends Pokemon {
  constructor(name, level, maxHp, dmg) {
    //calling the base constructor
    super(name, "Normal", level, maxHp, dmg);
  }
  //polymorphism; override attack() method for fire pokemon
  attack(opponent) {
    let multiplier = Math.floor(Math.random() * 11);

    if (multiplier % 2 == 0) {
      console.log(
        `${this.name} uses Tackle on ${opponent.name} and deals ${this.dmg} DAMAGE.`
      );
      opponent.receivedDamage(opponent);
    } else {
      console.log(
        `💘CRITICAL HIT: ${this.name} uses Tackle on ${opponent.name} and deals ${this.dmg} DAMAGE.`
      );
      opponent.receivedDamage(opponent);
    }
  }
}
