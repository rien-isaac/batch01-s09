class WaterPokemon extends Pokemon {
  constructor(name, level, hp, dmg) {
    //calling the base constructor
    super(name, "Water", level, hp, dmg);
  }
  //polymorphism; override attack() method for fire pokemon
  attack(opponent) {
    let multiplier = Math.floor(Math.random() * 11);

    if (multiplier % 2 == 0) {
      console.log(
        `${this.name} uses 💦Hydro Pump on ${
          opponent.name
        } and deals ${this.calculateDamage()} DAMAGE.`
      );
      opponent.receivedDamage(opponent);
    } else {
      console.log(
        `${this.name} uses 💦Hydro Pump on ${opponent.name} and deals ${
          this.calculateDamage() * multiplier
        } DAMAGE.`
      );
      opponent.receivedDamage(opponent);
    }
  }

  heal() {
    this.hp += 16;
    console.log(
      `${this.name} 💖REGAINED 10 HP with the 💧BLESSING OF WATER! Current HP: ${this.hp}`
    );
  }
}
