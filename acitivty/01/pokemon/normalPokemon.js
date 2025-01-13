class NormalPokemon extends Pokemon {
  constructor(name, level, maxHp, baseDmg) {
    //calling the base constructor
    super(name, "Normal", level, maxHp, baseDmg);
  }
  //polymorphism; override attack() method for fire pokemon
  attack(opponent) {
    let multiplier = Math.floor(Math.random() * this.baseDmg);
    this.dmg = this.calculateDamage() + multiplier;

    if (multiplier % 2 == 0) {
      console.log(
        `${this.name} uses Tackle on ${opponent.name} and deals ${this.dmg} DAMAGE.`
      );
      opponent.receivedDamage(this.dmg);
    } else {
      console.log(
        `💘CRITICAL HIT: ${this.name} uses Tackle on ${opponent.name} and deals ${this.dmg} DAMAGE.`
      );
      opponent.receivedDamage(this.dmg);
    }
  }
}
