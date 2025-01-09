//spawning pokemons for each trainers
//jonas pokemons
let rayquaza = new Pokemon("Rayquaza", "Legendary", 100, 100, 100);
let groudon = new Pokemon("Groudon", "Legendary", 100, 100, 100);
let kyogre = new Pokemon("Kyogre", "Legendary", 100, 100, 100);
let arceus = new Pokemon("Arceus", "Legendary", 100, 100, 100);
let deoxys = new Pokemon("Deoxys", "Legendary", 100, 100, 100);

//ash's pokemons
let godzilla = new Pokemon("Godzilla", "Plasma", 13, 13, 3);
let pikachu = new ElectricPokemon("Pikachu", 12, 12, 5);
let charmander = new FirePokemon("Charmander", 15, 15, 7);
let torchick = new FirePokemon("Torchick", 17, 17, 4);
let mudkip = new WaterPokemon("Mudkip", 10, 10, 6);

//red's pokemons
let geodude = new RockPokemon("Geodude", 17, 17, 8);
let electrobuzz = new ElectricPokemon("Electrobuzz", 18, 18, 3);
let flygon = new Pokemon("Flygon", "Dragon", 11, 11, 5);
let onyx = new RockPokemon("Onyx", 14, 14, 7);
let gabite = new Pokemon("Gabite", "Dragon", 15, 15, 2);

//blue's pokemon
let absol = new Pokemon("Absol", "Bug", 3, 8, 4);
let lotad = new WaterPokemon("Lotad", 5, 19, 6);
let wingul = new WaterPokemon("Wingul", 12, 18, 11);
let ralts = new Pokemon("Ralts", "Normal", 5, 7, 9);
let ratata = new Pokemon("Ratata", "Normal", 6, 3, 9);

//wabapet's pokemon
let numel = new Pokemon("Numel", "Normal", 8, 9, 10);
let oddish = new Pokemon("Oddish", "Grass", 6, 7, 8);
let psyduck = new WaterPokemon("Psyduck", 12, 15, 16);
let spoink = new Pokemon("Spoink", "Normal", 12, 15, 18);
let vulpix = new FirePokemon("Vulpix", 16, 18, 20);

//adding pokemons to their respective trainers
let jonas = new Trainer("Jonas");
jonas.addPokemon(rayquaza);
jonas.addPokemon(groudon);
jonas.addPokemon(kyogre);
jonas.addPokemon(arceus);
jonas.addPokemon(deoxys);

let ash = new Trainer("Ash");
ash.addPokemon(godzilla);
ash.addPokemon(pikachu);
ash.addPokemon(charmander);
ash.addPokemon(torchick);
ash.addPokemon(mudkip);

let red = new Trainer("Red");
red.addPokemon(geodude);
red.addPokemon(electrobuzz);
red.addPokemon(flygon);
red.addPokemon(onyx);
red.addPokemon(gabite);

let blue = new Trainer("Blue");
blue.addPokemon(ratata);
blue.addPokemon(ralts);
blue.addPokemon(wingul);
blue.addPokemon(lotad);
blue.addPokemon(absol);

let wabapet = new Trainer("Wabapet");
wabapet.addPokemon(spoink);
wabapet.addPokemon(vulpix);
wabapet.addPokemon(psyduck);
wabapet.addPokemon(oddish);
wabapet.addPokemon(numel);

//initiating single battle
// let battle = new Battle(redPokemon, ashPokemon);
// battle.startBattle();

// // initiating tournament
// let prelim1 = new Tournament(red, wabapet);
// prelim1.battle();
// // console.log(prelim1.winner);

// let prelim2 = new Tournament(blue, ash);
// prelim2.battle();
// // console.log(prelim2.winner);

// let semiFinals = new Tournament(prelim1.winner, prelim2.winner);
// semiFinals.battle();
// // console.log(semiFinals.winner);

// let finals = new Tournament(semiFinals.winner, jonas);
// finals.battle();
// // console.log(finals.winner);

// console.log(`The Champion in this tournament is ${finals.winner.name}!`);
// finals.winner.showPokemon();

//user promt for inputs

// let numberOfTrainers = prompt("How many trainer? ");
// if (numberOfTrainers > 5 && numberOfTrainers < 2) {
//   alert("Invalid Input");
//   location.reload();
// }

// console.log("test");

//start or nah
let willPlay = prompt("Game Master will you start the tournament? y/n");
if (willPlay.toLowerCase() == "n") {
  console.log("Edi Don't");
} else if (willPlay.toLowerCase() == "y") {
  //create pool of trainers
  let poolOfTrainers = [];
  poolOfTrainers.push(jonas);
  poolOfTrainers.push(ash);
  poolOfTrainers.push(red);
  poolOfTrainers.push(blue);
  poolOfTrainers.push(wabapet);

  console.log(poolOfTrainers);

  //how many trainer
  let numberOfTrainers = prompt("How many trainer? ");
  if (parseInt(numberOfTrainers) != 5) {
    alert("Invalid Input");
    location.reload();
  } else {
    let startIndex = poolOfTrainers.length - parseInt(numberOfTrainers);
    let contestants = poolOfTrainers.slice(startIndex);

    //for viewing only
    console.log(startIndex);
    console.log(contestants);

    //how many pokemon
    let numberOfPokemon = prompt(
      "How many pokemons each trainer is required? "
    );
    if (parseInt(numberOfPokemon) != 5) {
      alert("Invalid Input");
      location.reload();
    } else {
      //for 5 constestants
      let game1 = new Tournament(contestants[0], contestants[1]);
      game1.battle();

      let game2 = new Tournament(contestants[2], contestants[3]);
      game2.battle();

      let game3 = new Tournament(game1.winner, contestants[4]);
      game3.battle();

      let game4 = new Tournament(game1.loser, game2.loser);
      game4.battle();

      let game5 = new Tournament(game2.winner, game3.winner);
      game5.battle();

      let game6 = new Tournament(game4.winner, game3.loser);
      game6.battle();

      // let game7 = new Tournament(game6.winner, game5.loser);
      //   game7.battle();

      //set the top 3 into a new array
      let top3Trainers = [];
      top3Trainers.push(game5.winner, game6.winner, game6.loser);

      console.log(top3Trainers);

      //round robin part
      let roundRobinGame1 = new Tournament(top3Trainers[0], top3Trainers[1]);
      roundRobinGame1.battle();

      let roundRobinGame2 = new Tournament(top3Trainers[2], top3Trainers[0]);
      roundRobinGame2.battle();
    }
  }
}
