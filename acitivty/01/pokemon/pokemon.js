class Pokemon {
  constructor(name, type, level, maxHp, baseDmg) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.maxHp = maxHp;
    this.hp = this.maxHp;
    this.baseDmg = baseDmg;
    this.dmg = 0;
    this.def = 0;
    this.defBoostIsActive = false;
  }
  attack(opponent) {
    let multiplier = Math.floor(Math.random() * this.dmg);
    this.dmg = this.calculateDamage() + multiplier;
    // let damage = this.calculateDamage();

    if (multiplier % 2 == 0) {
      console.log(
        `⚔ ${this.name} attack ${opponent.name} and deals ${this.dmg} DAMAGE.`
      );
      opponent.receivedDamage(this.dmg);
    } else {
      console.log(
        `💘CRITICAL HIT: ${this.name} attack ${opponent.name} and deals a ${this.dmg} DAMAGE.`
      );
      opponent.receivedDamage(this.dmg);
    }
  }

  calculateDamage() {
    return Math.floor(Math.random() * this.baseDmg + this.baseDmg / 2);
  }

  receivedDamage(opponentDmg) {
    this.hp -= opponentDmg - this.def;
    if (this.hp <= 0) {
      console.log(`💀 ${this.name} has fainted.`);
    } else {
      console.log(
        `${this.name} has ${this.hp} (⬇${opponentDmg})/${this.maxHp} HP left.`
      );
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
