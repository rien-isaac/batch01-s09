class Pokemon {
  constructor(name, type, level, hp, dmg) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    this.dmg = dmg;
    this.def = 0;
  }
  attack(opponent) {
    let multiplier = Math.floor(Math.random() * 11);

    if (multiplier % 2 == 0) {
      console.log(
        `⚔ ${this.name} attack ${
          opponent.name
        } and deals ${this.calculateDamage()} DAMAGE.`
      );
      opponent.receivedDamage(opponent);
    } else {
      console.log(
        ` 💘CRITICAL HIT: ${this.name} attack ${opponent.name} and deals a ${
          this.calculateDamage() * multiplier
        } DAMAGE.`
      );
      opponent.receivedDamage(opponent);
    }
  }

  calculateDamage() {
    return Math.floor(Math.random() * this.dmg + this.dmg);
  }

  receivedDamage(opponent) {
    // this.hp -= opponent.calculateDamage();
    this.hp -= opponent.dmg - this.def;
    if (this.hp <= 0) {
      console.log(`💀${this.name} has fainted.`);
      //   console.log(`${opponent.name} level up ${opponent.level + 1}`);
    } else {
      console.log(`${this.name} has ${this.hp} HP left.`);
    }
  }

  heal() {
    this.hp += 10;
    this.def += 10;
    console.log(
      `${this.name} use 💖HEAL and gained 10 hp. ${this.name}'s Current HP: ${this.hp} and gain temporary 🛡🔼DEFENSE BOOST.`
    );
  }

  powerUp() {
    this.dmg += 16;
    console.log(
      `${this.name} uses 💪🔼POWER UP and increase its 💥DAMAGE ${this.dmg} (+16)`
    );
  }
}
