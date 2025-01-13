//instantiate different pokemons
let rattata = new NormalPokemon("Rattata", 1, 20, 5);
let sentret = new NormalPokemon("Sentret", 1, 20, 5);
let pidgey = new NormalPokemon("Pidgey", 1, 20, 5);
let hoothoot = new NormalPokemon("Hoothoot", 1, 20, 5);
let bidoof = new NormalPokemon("Bidoof", 1, 20, 5);
let pichu = new ElectricPokemon("Pichu", 1, 20, 5);
let magnemite = new ElectricPokemon("Magnemite", 1, 20, 5);
let elekid = new ElectricPokemon("Elekid", 1, 20, 5);
let plusle = new ElectricPokemon("Plusle", 1, 20, 5);
let minun = new ElectricPokemon("Minun", 1, 20, 5);
let chimchar = new FirePokemon("Chimchar", 1, 20, 5);
let torchik = new FirePokemon("Torchik", 1, 20, 5);
let cyndaquill = new FirePokemon("Cyndaquill", 1, 20, 5);
let vulpix = new FirePokemon("Vulpix", 1, 20, 5);
let growlithe = new FirePokemon("Growlithe", 1, 20, 5);
let squirtle = new WaterPokemon("Squirtle", 1, 20, 5);
let totodile = new WaterPokemon("Totodile", 1, 20, 5);
let mudkip = new WaterPokemon("Mudkip", 1, 20, 5);
let chikorita = new WaterPokemon("Chikorita", 1, 20, 5);
let piplup = new WaterPokemon("Piplup", 1, 20, 5);
let geodude = new RockPokemon("Geodude", 1, 20, 5);
let onix = new RockPokemon("Onix", 1, 20, 5);
let roggenrola = new RockPokemon("Roggenrola", 1, 20, 5);
let tirtouga = new RockPokemon("Tirtouga", 1, 20, 5);
let shuckle = new RockPokemon("Shuckle", 1, 20, 5);

//add pokemons to a pool of pokemons
let poolOfPokemons = [
  rattata,
  sentret,
  pidgey,
  hoothoot,
  bidoof,
  pichu,
  magnemite,
  elekid,
  plusle,
  minun,
  chimchar,
  torchik,
  cyndaquill,
  vulpix,
  growlithe,
  squirtle,
  totodile,
  mudkip,
  chikorita,
  piplup,
  geodude,
  onix,
  roggenrola,
  tirtouga,
  shuckle,
];

//instantiate trainers
let jonas = new Trainer("Jonas");
let jessy = new Trainer("Jessy");
let james = new Trainer("James");
let ash = new Trainer("Ash");
let red = new Trainer("Red");
let blue = new Trainer("Blue");
let wabapet = new Trainer("Wabapet");

//add trainers to the pool of trainers
let poolOfTrainers = [jonas, jessy, james, ash, red, blue, wabapet];

//shuffle pokemon and trainers
poolOfPokemons.sort(() => Math.random() - 0.7); //shuffle pokemons
poolOfTrainers.sort(() => Math.random() - 0.5); //shuffle trainers

//array for trainers
let contestants = []; //for bracket matching battles
let top3Trainers = []; // for round robin matching battles

let champion;

//start here

console.log("Hello Game Master");

console.log(`%cPOKEMON Tournament`, `font-size: 4rem; text-align: center;`);

//start or nah
let willPlay = prompt("🧓Game Master will you start the tournament? y/n");

if (willPlay && willPlay.toLowerCase() == "n") {
  console.log("Edi Don't");
} else if (willPlay && willPlay.toLowerCase() == "y") {
  //Prompt how many trainer?
  let numberOfTrainers = prompt("How many trainer? 3-5");
  if (parseInt(numberOfTrainers) >= 3 && parseInt(numberOfTrainers) <= 5) {
    //add trainers as contestants
    for (let i = 0; i < parseInt(numberOfTrainers); i++) {
      contestants.push(poolOfTrainers[i]);
    }

    //Prompt how many pokemon?
    let numberOfPokemon = prompt(
      "How many pokemons each trainer is required? 1-5"
    );
    if (parseInt(numberOfPokemon) >= 1 && parseInt(numberOfPokemon) <= 5) {
      //add pokemon to each trainers
      let pokemonIndex = 0;
      for (let i = 0; i < parseInt(numberOfTrainers); i++) {
        while (contestants[i].pokemonList.length < parseInt(numberOfPokemon)) {
          contestants[i].addPokemon(poolOfPokemons[pokemonIndex]);
          pokemonIndex++;
        }
      }

      contestants.forEach(function (trainer) {
        console.log(`➕🧒${trainer.name} joins the tournament.`);
      });

      switch (parseInt(numberOfTrainers)) {
        case 3:
          console.log(contestants); //for viewing purposes only
          bracketMatching3Trainers();
          break;
        case 4:
          console.log(contestants); //for viewing purposes only
          bracketMatching4Trainers();
          roundRobinMatching();
          break;
        case 5:
          console.log(contestants); //for viewing purposes only
          bracketMatching5Trainers();
          roundRobinMatching();
          break;
      }
    } else {
      invalidInput();
    }
  } else {
    invalidInput();
  }
} else {
  invalidInput();
}

function invalidInput() {
  alert("Invalid Input");
  location.reload();
}

function bracketMatching3Trainers() {
  top3Trainers.push(contestants[0], contestants[1], contestants[2]);
  roundRobinMatching();
}

function bracketMatching4Trainers() {
  //for 4 contestants

  console.log(`%cElimination Battle`, `font-size: 3rem; `);

  let game1 = new Tournament(contestants[0], contestants[1]);
  game1.battle();

  let game2 = new Tournament(contestants[2], contestants[3]);
  game2.battle();

  let game3 = new Tournament(game1.winner, game2.winner);
  game3.battle();

  let game4 = new Tournament(game1.loser, game2.loser);
  game4.battle();

  let game5 = new Tournament(game4.winner, game3.loser);
  game5.battle();

  //setting top 3 trainers
  top3Trainers.push(game3.winner, game5.winner, game5.loser);
}

function bracketMatching5Trainers() {
  //for 5 constestants

  console.log(`%cElimination Battle`, `font-size: 3rem; `);

  let game1 = new Tournament(contestants[0], contestants[1]);
  game1.battle();

  let game2 = new Tournament(contestants[2], contestants[3]);
  game2.battle();

  let game3 = new Tournament(game1.winner, contestants[4]);
  game3.battle();

  let game4 = new Tournament(game1.winner, game2.loser);
  game4.battle();

  let game5 = new Tournament(game2.winner, game3.winner);
  game5.battle();

  let game6 = new Tournament(game4.winner, game3.loser);
  game6.battle();

  //set the top 3 into a new array
  top3Trainers.push(game5.winner, game6.winner, game6.loser);
}

function roundRobinMatching() {
  console.log(`%cChampionship Battle`, `font-size: 3rem; `);

  let roundRobinGame1 = new RoundRobin(top3Trainers[0], top3Trainers[1]);
  roundRobinGame1.battle();

  let roundRobinGame2 = new RoundRobin(top3Trainers[1], top3Trainers[2]);
  roundRobinGame2.battle();

  let roundRobinGame3 = new RoundRobin(top3Trainers[2], top3Trainers[0]);
  roundRobinGame3.battle();

  top3Trainers.forEach(function (trainer) {
    if (trainer.roundRobinScore == 2 || trainer.roundRobinScore == 3) {
      champion = trainer;
    }
  });

  console.log(`%cAnd our CHAMPION is`, "font-size: 4rem;");

  console.log(
    `
    %c👦 ${champion.name}
    LVL ${champion.level}
    `,
    `font-size: 4rem; font-weight: 900;`
  );

  console.log(`Pokemons of ${champion.name}`);
  champion.pokemonList.forEach(function (pokemon) {
    console.log(`
      👽${pokemon.name}
      LVL ${pokemon.level}
      🧡 ${pokemon.hp}/${pokemon.maxHp}
      💪 ${pokemon.baseDmg}
      `);
  });
}
