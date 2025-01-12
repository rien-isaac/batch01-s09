class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemonList = [];
    this.roundRobinScore = 0;
    this.level = 1;
  }

  addPokemon(pokemon) {
    this.pokemonList.push(pokemon);
  }

  selectPokemon(index) {
    return this.pokemonList[index];
  }

  showPokemon() {
    for (let i = 0; i < this.pokemonList.length; i++) {
      let design;
      switch (this.pokemonList[i].type) {
        case "Fire":
          design = `color: #fff; background: #FFA500; padding: .3rem; margin: .2rem .3rem; border-radius: .4rem;`;
          break;
        case "Water":
          design = `color: #fff; background: #0000FF; padding: .3rem; margin: .2rem .3rem; border-radius: .4rem;`;
          break;
        case "Rock":
          design = `color: #fff; background: #ae8b0c; padding: .3rem; margin: .2rem .3rem; border-radius: .4rem;`;
          break;
        case "Electric":
          design = `color: #000; background: #ffff00; padding: .3rem; margin: .2rem .3rem; border-radius: .4rem;`;
          break;
        default:
          design = `color: #fff; background: #808080; padding: .3rem; margin: .2rem .3rem; border-radius: .4rem;`;
          break;
      }

      console.log(
        `Name: ${this.pokemonList[i].name} Type: %c${this.pokemonList[i].type}`,
        design,
        `LVL: ${this.pokemonList[i].level}`
      );
    }
  }

  revivePokemons() {
    let faintedPokemons = this.pokemonList.filter(function (pokemon) {
      return pokemon.hp <= 0;
    });

    faintedPokemons.forEach(function (pokemon) {
      pokemon.hp = pokemon.maxHp;
    });

    console.log(`${this.name} 💓REVIVES his pokemons.`);
  }

  levelUp() {
    this.level++;
    console.log(`${this.name} ⬆LEVEL UP`);
  }

  displayInfo() {
    console.log(`Trainer: ${this.name}\nLvl: ${this.level}\nPokemons:`);
  }

  displayPokemon() {
    let introduction;

    this.pokemonList.map(function (pokemon) {
      let design;
      switch (pokemon.type) {
        case "Fire":
          design = `color: #fff; background: #FFA500; padding: .3rem; margin: .2rem .3rem; border-radius: .4rem;`;
          break;
        case "Water":
          design = `color: #fff; background: #0000FF; padding: .3rem; margin: .2rem .3rem; border-radius: .4rem;`;
          break;
        case "Rock":
          design = `color: #fff; background: #ae8b0c; padding: .3rem; margin: .2rem .3rem; border-radius: .4rem;`;
          break;
        case "Electric":
          design = `color: #000; background: #ffff00; padding: .3rem; margin: .2rem .3rem; border-radius: .4rem;`;
          break;
        default:
          design = `color: #fff; background: #808080; padding: .3rem; margin: .2rem .3rem; border-radius: .4rem;`;
          break;
      }
      console.log(`%cLvl: ${pokemon.level} ${pokemon.name}`, design);
    });
  }
}
