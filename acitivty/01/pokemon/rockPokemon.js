class RockPokemon extends Pokemon {
  constructor(name, level, maxHp, baseDmg) {
    //calling the base constructor
    super(name, "Rock", level, maxHp, baseDmg);
  }
  //polymorphism; override attack() method for fire pokemon
  attack(opponent) {
    let multiplier = Math.floor(Math.random() * this.baseDmg);
    this.dmg = this.calculateDamage() + multiplier;

    //add power up
    if (multiplier > 3) {
      this.powerUp(this.dmg);
    }

    if (multiplier % 2 == 0) {
      console.log(
        `${this.name} uses Earthquake on ${opponent.name} and deals ${this.dmg} DAMAGE.`
      );
      opponent.receivedDamage(this.dmg);
    } else {
      console.log(
        `💘CRITICAL HIT: ${this.name} uses Earthquake on ${opponent.name} and deals ${this.dmg} DAMAGE.`
      );
      opponent.receivedDamage(this.dmg);
    }
  }
}
