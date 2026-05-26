const players = [

  { name: "Mbappé", rating: 91, nation: "France", rarity: "Legendary" },
  { name: "Haaland", rating: 91, nation: "Norvège", rarity: "Legendary" },
  { name: "Vinicius Jr", rating: 90, nation: "Brésil", rarity: "Legendary" },
  { name: "Bellingham", rating: 90, nation: "Angleterre", rarity: "Epic" },
  { name: "Rodri", rating: 91, nation: "Espagne", rarity: "Legendary" },
  { name: "De Bruyne", rating: 90, nation: "Belgique", rarity: "Legendary" },
  { name: "Yamal", rating: 87, nation: "Espagne", rarity: "Rare" },
  { name: "Musiala", rating: 88, nation: "Allemagne", rarity: "Epic" },
  { name: "Pedri", rating: 87, nation: "Espagne", rarity: "Rare" },
  { name: "Wirtz", rating: 88, nation: "Allemagne", rarity: "Rare" },
  { name: "Kane", rating: 90, nation: "Angleterre", rarity: "Epic" },
  { name: "Salah", rating: 89, nation: "Égypte", rarity: "Epic" },
  { name: "Lewandowski", rating: 89, nation: "Pologne", rarity: "Epic" },
  { name: "Valverde", rating: 88, nation: "Uruguay", rarity: "Rare" },
  { name: "Saka", rating: 88, nation: "Angleterre", rarity: "Rare" },
  { name: "Palmer", rating: 87, nation: "Angleterre", rarity: "Rare" },
  { name: "Rice", rating: 87, nation: "Angleterre", rarity: "Rare" },
  { name: "Foden", rating: 89, nation: "Angleterre", rarity: "Epic" },
  { name: "Griezmann", rating: 88, nation: "France", rarity: "Epic" },
  { name: "Theo Hernandez", rating: 87, nation: "France", rarity: "Rare" },
  { name: "Camavinga", rating: 86, nation: "France", rarity: "Rare" },
  { name: "Tchouaméni", rating: 87, nation: "France", rarity: "Rare" },
  { name: "Saliba", rating: 88, nation: "France", rarity: "Epic" },
  { name: "Upamecano", rating: 84, nation: "France", rarity: "Common" },
  { name: "Koundé", rating: 86, nation: "France", rarity: "Rare" },
  { name: "Dembélé", rating: 87, nation: "France", rarity: "Rare" },
  { name: "Maignan", rating: 88, nation: "France", rarity: "Epic" },
  { name: "Martinez", rating: 88, nation: "Argentine", rarity: "Epic" },
  { name: "Messi", rating: 88, nation: "Argentine", rarity: "Legendary" },
  { name: "Álvarez", rating: 86, nation: "Argentine", rarity: "Rare" },
  { name: "Mac Allister", rating: 86, nation: "Argentine", rarity: "Rare" },
  { name: "Enzo Fernandez", rating: 85, nation: "Argentine", rarity: "Rare" },
  { name: "Di María", rating: 84, nation: "Argentine", rarity: "Common" },
  { name: "Otamendi", rating: 83, nation: "Argentine", rarity: "Common" },
  { name: "Romero", rating: 86, nation: "Argentine", rarity: "Rare" },
  { name: "Ederson", rating: 88, nation: "Brésil", rarity: "Epic" },
  { name: "Alisson", rating: 89, nation: "Brésil", rarity: "Epic" },
  { name: "Neymar", rating: 87, nation: "Brésil", rarity: "Legendary" },
  { name: "Rodrygo", rating: 86, nation: "Brésil", rarity: "Rare" },
  { name: "Raphinha", rating: 85, nation: "Brésil", rarity: "Rare" },
  { name: "Militão", rating: 86, nation: "Brésil", rarity: "Rare" },
  { name: "Marquinhos", rating: 87, nation: "Brésil", rarity: "Rare" },
  { name: "Bruno Guimarães", rating: 85, nation: "Brésil", rarity: "Rare" },
  { name: "Casemiro", rating: 84, nation: "Brésil", rarity: "Common" },
  { name: "Modric", rating: 87, nation: "Croatie", rarity: "Legendary" },
  { name: "Gvardiol", rating: 86, nation: "Croatie", rarity: "Rare" },
  { name: "Kovacic", rating: 84, nation: "Croatie", rarity: "Common" },
  { name: "Brozovic", rating: 83, nation: "Croatie", rarity: "Common" },
  { name: "Cristiano Ronaldo", rating: 87, nation: "Portugal", rarity: "Legendary" },
  { name: "Leão", rating: 86, nation: "Portugal", rarity: "Rare" },
  { name: "Bernardo Silva", rating: 88, nation: "Portugal", rarity: "Epic" },
  { name: "Bruno Fernandes", rating: 87, nation: "Portugal", rarity: "Epic" },
  { name: "João Félix", rating: 83, nation: "Portugal", rarity: "Common" },
  { name: "Ruben Dias", rating: 88, nation: "Portugal", rarity: "Epic" },
  { name: "Pepe", rating: 82, nation: "Portugal", rarity: "Common" },
  { name: "Onana", rating: 85, nation: "Cameroun", rarity: "Rare" },
  { name: "Hakimi", rating: 86, nation: "Maroc", rarity: "Rare" },
  { name: "Ziyech", rating: 82, nation: "Maroc", rarity: "Common" },
  { name: "Amrabat", rating: 81, nation: "Maroc", rarity: "Common" },
  { name: "Osimhen", rating: 88, nation: "Nigeria", rarity: "Epic" },
  { name: "Lookman", rating: 84, nation: "Nigeria", rarity: "Common" },
  { name: "Kvaratskhelia", rating: 87, nation: "Géorgie", rarity: "Epic" },
  { name: "Donnarumma", rating: 87, nation: "Italie", rarity: "Epic" },
  { name: "Bastoni", rating: 86, nation: "Italie", rarity: "Rare" },
  { name: "Chiesa", rating: 84, nation: "Italie", rarity: "Common" },
  { name: "Tonali", rating: 85, nation: "Italie", rarity: "Rare" },
  { name: "Frimpong", rating: 84, nation: "Pays-Bas", rarity: "Common" },
  { name: "Van Dijk", rating: 89, nation: "Pays-Bas", rarity: "Legendary" },
  { name: "De Jong", rating: 87, nation: "Pays-Bas", rarity: "Epic" },
  { name: "Xavi Simons", rating: 84, nation: "Pays-Bas", rarity: "Rare" },
  { name: "Gyökeres", rating: 86, nation: "Suède", rarity: "Rare" },
  { name: "Isak", rating: 85, nation: "Suède", rarity: "Rare" },
  { name: "Ødegaard", rating: 89, nation: "Norvège", rarity: "Epic" },
  { name: "Kim Min-jae", rating: 84, nation: "Corée du Sud", rarity: "Common" },
  { name: "Son", rating: 87, nation: "Corée du Sud", rarity: "Epic" },
  { name: "Mitoma", rating: 83, nation: "Japon", rarity: "Common" },
  { name: "Kubo", rating: 84, nation: "Japon", rarity: "Rare" },
  { name: "Endo", rating: 81, nation: "Japon", rarity: "Common" },
  { name: "Pulisic", rating: 84, nation: "États-Unis", rarity: "Rare" },
  { name: "McKennie", rating: 81, nation: "États-Unis", rarity: "Common" },
  { name: "Davies", rating: 85, nation: "Canada", rarity: "Rare" },
  { name: "David", rating: 84, nation: "Canada", rarity: "Rare" },
  { name: "Giménez", rating: 82, nation: "Mexique", rarity: "Common" },
  { name: "Lozano", rating: 81, nation: "Mexique", rarity: "Common" }
  function openPack() {

  const randomPlayer =
    players[Math.floor(Math.random() * players.length)];

  document.getElementById("result").innerHTML = `

    <h2>🎉 ${randomPlayer.name}</h2>

    <p>⭐ ${randomPlayer.rating}</p>

    <p>🌍 ${randomPlayer.nation}</p>

    <p>💎 ${randomPlayer.rarity}</p>

  `;
}

];
