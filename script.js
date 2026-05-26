const players = [];

// Génération automatique de 5000 joueurs

const firstNames = [
  "Kylian","Erling","Vinicius","Jude","Kevin",
  "Pedri","Lamine","Florian","Harry","Mohamed",
  "Robert","Eduardo","Bukayo","Phil","Theo",
  "Aurélien","William","Mike","Neymar","Rodrygo",
  "Raphinha","Luka","Bernardo","Bruno","Victor",
  "Khvicha","Virgil","Frenkie","Martin","Heung-min"
];

const lastNames = [
  "Mbappé","Haaland","Junior","Bellingham","De Bruyne",
  "Gonzalez","Yamal","Wirtz","Kane","Salah",
  "Lewandowski","Camavinga","Saka","Foden","Hernandez",
  "Tchouaméni","Saliba","Maignan","Jr","Silva",
  "Dias","Fernandes","Osimhen","Kvaratskhelia","Van Dijk",
  "De Jong","Ødegaard","Son","Kubo","Davies"
];

const nations = [
  "France",
  "Belgique",
  "Brésil",
  "Argentine",
  "Portugal",
  "Espagne",
  "Angleterre",
  "Allemagne",
  "Italie",
  "Pays-Bas",
  "Maroc",
  "Croatie",
  "Norvège",
  "Canada",
  "États-Unis",
  "Japon",
  "Corée du Sud",
  "Nigeria"
];

const rarities = [
  "Common",
  "Rare",
  "Epic",
  "Legendary"
];

for(let i = 0; i < 5000; i++) {

  const randomFirst =
    firstNames[Math.floor(Math.random() * firstNames.length)];

  const randomLast =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  const randomNation =
    nations[Math.floor(Math.random() * nations.length)];

  const randomRarity =
    rarities[Math.floor(Math.random() * rarities.length)];

  let rating = 70;

  if(randomRarity === "Common") {
    rating = Math.floor(Math.random() * 10) + 70;
  }

  if(randomRarity === "Rare") {
    rating = Math.floor(Math.random() * 6) + 80;
  }

  if(randomRarity === "Epic") {
    rating = Math.floor(Math.random() * 4) + 86;
  }

  if(randomRarity === "Legendary") {
    rating = Math.floor(Math.random() * 3) + 90;
  }

  players.push({

    name: `${randomFirst} ${randomLast}`,

    rating: rating,

    nation: randomNation,

    rarity: randomRarity

  });

}

function openPack() {

  const randomPlayer =
    players[Math.floor(Math.random() * players.length)];

  document.getElementById("result").innerHTML = `

    <div class="card ${randomPlayer.rarity.toLowerCase()}">

      <div class="rating">
        ${randomPlayer.rating}
      </div>

      <div class="name">
        ${randomPlayer.name}
      </div>

      <div class="nation">
        🌍 ${randomPlayer.nation}
      </div>

      <div class="rarity">
        💎 ${randomPlayer.rarity}
      </div>

    </div>

  `;
}
