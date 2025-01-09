class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemonList = [];
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
        `LVL: ${this.pokemonList[i].level}, HP: ${this.pokemonList[i].hp}, DMG: ${this.pokemonList[i].dmg}`
      );
    }
  }
}
