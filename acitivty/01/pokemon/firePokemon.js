class FirePokemon extends Pokemon {
  constructor(name, level, hp, dmg) {
    //calling the base constructor
    super(name, "Fire", level, hp, dmg);
  }
  //polymorphism; override attack() method for fire pokemon
  attack(opponent) {
    let multiplier = Math.floor(Math.random() * 11);

    if (multiplier % 2 == 0) {
      console.log(
        `${this.name} uses 🔥Flamethrower on ${
          opponent.name
        } and deals ${this.calculateDamage()} DAMAGE.`
      );
      opponent.receivedDamage(opponent);
    } else {
      console.log(
        `${this.name} uses 🔥Flamethrower on ${opponent.name} and deals ${
          this.calculateDamage() * multiplier
        } DAMAGE.`
      );
      opponent.receivedDamage(opponent);
    }
  }
}
