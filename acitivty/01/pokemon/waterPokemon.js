class WaterPokemon extends Pokemon {
  constructor(name, level, maxHp, baseDmg) {
    //calling the base constructor
    super(name, "Water", level, maxHp, baseDmg);
  }
  //polymorphism; override attack() method for fire pokemon
  attack(opponent) {
    let multiplier = Math.floor(Math.random() * this.baseDmg);
    this.dmg = this.calculateDamage() + multiplier;

    if (multiplier % 2 == 0) {
      console.log(
        `${this.name} uses 💦Hydro Pump on ${opponent.name} and deals ${this.dmg} DAMAGE.`
      );
      opponent.receivedDamage(this.dmg);
    } else {
      console.log(
        `💘CRITICAL HIT: ${this.name} uses 💦Hydro Pump on ${opponent.name} and deals ${this.dmg} DAMAGE.`
      );
      opponent.receivedDamage(this.dmg);
    }
  }

  heal() {
    this.hp += 16;
    //ensures that the hp will not exceed the max hp
    if (this.hp > this.maxHp) {
      this.hp = this.maxHp;
    }
    console.log(
      `${this.name} 💖REGAINED 10 HP with the 💧BLESSING OF WATER! Current HP: ${this.hp}/${this.maxHp}`
    );
  }
}
