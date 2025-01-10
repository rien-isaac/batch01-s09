class Pokemon {
  constructor(name, type, level, maxHp, dmg) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.maxHp = maxHp;
    this.hp = this.maxHp;
    this.dmg = dmg;
    this.def = 0;
    this.defBoostIsActive = false;
  }
  attack(opponent) {
    // let multiplier = Math.floor(Math.random() * 11);
    // let damage = this.calculateDamage();

    if (multiplier % 2 == 0) {
      console.log(
        `⚔ ${this.name} attack ${opponent.name} and deals ${this.dmg} DAMAGE.`
      );
      opponent.receivedDamage(opponent);
    } else {
      console.log(
        `💘CRITICAL HIT: ${this.name} attack ${opponent.name} and deals a ${this.dmg} DAMAGE.`
      );
      opponent.receivedDamage(opponent);
    }
  }

  calculateDamage() {
    // return Math.floor(Math.random() * this.dmg + this.dmg / 2);
  }

  receivedDamage(opponent) {
    this.hp -= opponent.dmg - this.def;
    if (this.hp <= 0) {
      console.log(`💀${this.name} has fainted.`);
    } else {
      console.log(`${this.name} has ${this.hp}/${this.maxHp} HP left.`);
    }
  }

  heal() {
    this.hp += 10;
    if (this.hp > this.maxHp) {
      this.hp = this.maxHp;
    }
    this.def += 2;
    console.log(
      `${this.name} used 💖HEAL and gained 10 hp. ${this.name}'s Current HP: ${this.hp}/${this.maxHp} and gain temporary 🛡🔼DEFENSE BOOST.`
    );
    this.defBoostIsActive = true;
  }

  powerUp() {
    this.dmg += 2;
    console.log(
      `${this.name} uses 💪🔼POWER UP and increase its 💥DAMAGE ${this.dmg} (+2)`
    );
  }

  levelUp() {
    this.level += 1;
    console.log(`${this.name} ⬆LEVEL UP.`);
  }
}
