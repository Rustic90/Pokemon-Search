// Array of all 151 original pokemon
var pokeList = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
	"squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle",
	"kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow",
	"fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran_f",
	"nidorina", "nidoqueen", "nidoran_m", "nidorino", "nidoking", "clefairy", "clefable",
	"vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom",
	"vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth",
	"persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag",
	"poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp",
	"bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler",
	"golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd",
	"doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly",
	"haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode",
	"exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", 
	"koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea",
	"seadra", "goldeen", "seaking", "staryu", "starmie", "mr mime", "scyther", "jynx", "electabuzz",
	"magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon",
	"flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax",
	"articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew"];



// Setting variable for search box and adding event handler to it to listen for keyups
var sBox = document.querySelector("#search_box");
sBox.addEventListener("keyup", searchPokes);
	
// Function to get image of pokemon when clicked
// Uses a sprite sheet, which has 16 pokemon per row in it
function getPokeInfo(selectedPokemon) {
	document.querySelector("#pokemonInfo").innerHTML = "<br>" + pokeList[selectedPokemon -1];
	if (selectedPokemon <= 16) // row1
	{
		document.getElementById("pokemonPicture").style.backgroundImage="url('pokemon_sprites.png')";
		document.getElementById("pokemonPicture").style.backgroundPosition=`${(selectedPokemon-1) * -64}px 0px`;
	}
	else if (selectedPokemon >= 17 && selectedPokemon <= 32) // row 2
	{
		document.getElementById("pokemonPicture").style.backgroundImage="url('pokemon_sprites.png')";
		document.getElementById("pokemonPicture").style.backgroundPosition=`${(selectedPokemon-17) * -64}px -64px`;
	}
	else if (selectedPokemon >= 33 && selectedPokemon <= 48) // row 3
	{
		document.getElementById("pokemonPicture").style.backgroundImage="url('pokemon_sprites.png')";
		document.getElementById("pokemonPicture").style.backgroundPosition=`${(selectedPokemon-33) * -64}px -128px`;
	}
	else if (selectedPokemon >= 49 && selectedPokemon <= 64) // row 4
	{
		document.getElementById("pokemonPicture").style.backgroundImage="url('pokemon_sprites.png')";
		document.getElementById("pokemonPicture").style.backgroundPosition=`${(selectedPokemon-49) * -64}px -192px`;
	}
	else if (selectedPokemon >= 65 && selectedPokemon <= 80) // row 5
	{
		document.getElementById("pokemonPicture").style.backgroundImage="url('pokemon_sprites.png')";
		document.getElementById("pokemonPicture").style.backgroundPosition=`${(selectedPokemon-65) * -64}px -256px`;
	}
	else if (selectedPokemon >= 81 && selectedPokemon <= 96) // row 6
	{
		document.getElementById("pokemonPicture").style.backgroundImage="url('pokemon_sprites.png')";
		document.getElementById("pokemonPicture").style.backgroundPosition=`${(selectedPokemon-81) * -64}px -320px`;
	}
	else if (selectedPokemon >= 97 && selectedPokemon <= 112) // row 7
	{
		document.getElementById("pokemonPicture").style.backgroundImage="url('pokemon_sprites.png')";
		document.getElementById("pokemonPicture").style.backgroundPosition=`${(selectedPokemon-97) * -64}px -384px`;
	}
	else if (selectedPokemon >= 113 && selectedPokemon <= 128) // row 8
	{
		document.getElementById("pokemonPicture").style.backgroundImage="url('pokemon_sprites.png')";
		document.getElementById("pokemonPicture").style.backgroundPosition=`${(selectedPokemon-113) * -64}px -448px`;
	}
	else if (selectedPokemon >= 129 && selectedPokemon <= 144) // row 9
	{
		document.getElementById("pokemonPicture").style.backgroundImage="url('pokemon_sprites.png')";
		document.getElementById("pokemonPicture").style.backgroundPosition=`${(selectedPokemon-129) * -64}px -512px`;
	}
	else if (selectedPokemon >= 145 && selectedPokemon <= 151) // row 10 - Final Row
	{
		document.getElementById("pokemonPicture").style.backgroundImage="url('pokemon_sprites.png')";
		document.getElementById("pokemonPicture").style.backgroundPosition=`${(selectedPokemon-145) * -64}px -576px`;
	}
	document.getElementById("search_box").focus();
}

// When a user enters a letter, this creates a button for all matches	
function searchPokes() 
{
	var search = sBox.value;
	length = search.length;
	document.getElementById("pokemonPicture").style.background="none";
	document.querySelector("#list").innerHTML = "";
	document.querySelector("#pokemonInfo").innerHTML = "";
	var contentArea = document.querySelector("#list");
	
	for (i=0; i<pokeList.length; i++)
	{
		switch(length){
		case 1: if (pokeList[i].charAt(0) == search.charAt(0))
		{contentArea.innerHTML += `<button  onclick="getPokeInfo(${i+1})"> ${pokeList[i]} </button>`;};
		break;
				
		case 2: if (pokeList[i].charAt(0) == search.charAt(0) && pokeList[i].charAt(1) == search.charAt(1))
		{contentArea.innerHTML += `<button onclick="getPokeInfo(${i+1})"> ${pokeList[i]} </button>`;};
		break;
				
		case 3: if (pokeList[i].charAt(0) == search.charAt(0) && pokeList[i].charAt(1) == search.charAt(1) && pokeList[i].charAt(2) == search.charAt(2))
		{contentArea.innerHTML += `<button onclick="getPokeInfo(${i+1})"> ${pokeList[i]} </button>`;};
		break;
				
		case 4: if (pokeList[i].charAt(0) == search.charAt(0) && pokeList[i].charAt(1) == search.charAt(1) && pokeList[i].charAt(2) == search.charAt(2) && pokeList[i].charAt(3) == search.charAt(3))
		{contentArea.innerHTML += `<button onclick="getPokeInfo(${i+1})"> ${pokeList[i]} </button>`;};
		break;
				
		case 5: if (pokeList[i].charAt(0) == search.charAt(0) && pokeList[i].charAt(1) == search.charAt(1) && pokeList[i].charAt(2) == search.charAt(2) && pokeList[i].charAt(3) == search.charAt(3) && pokeList[i].charAt(4) == search.charAt(4))
		{contentArea.innerHTML += `<button onclick="getPokeInfo(${i+1})"> ${pokeList[i]} </button>`;};
		break;
				
		case 6: if (pokeList[i].charAt(0) == search.charAt(0) && pokeList[i].charAt(1) == search.charAt(1) && pokeList[i].charAt(2) == search.charAt(2) && pokeList[i].charAt(3) == search.charAt(3) && pokeList[i].charAt(4) == search.charAt(4) && pokeList[i].charAt(5) == search.charAt(5))
		{contentArea.innerHTML += `<button onclick="getPokeInfo(${i+1})"> ${pokeList[i]} </button>`;};
		break;
				
		case 7: if (pokeList[i].charAt(0) == search.charAt(0) && pokeList[i].charAt(1) == search.charAt(1) && pokeList[i].charAt(2) == search.charAt(2) && pokeList[i].charAt(3) == search.charAt(3) && pokeList[i].charAt(4) == search.charAt(4) && pokeList[i].charAt(5) == search.charAt(5) && pokeList[i].charAt(6) == search.charAt(6))
		{contentArea.innerHTML += `<button onclick="getPokeInfo(${i+1})"> ${pokeList[i]} </button>`;};
		break;
				
		case 8: if (pokeList[i].charAt(0) == search.charAt(0) && pokeList[i].charAt(1) == search.charAt(1) && pokeList[i].charAt(2) == search.charAt(2) && pokeList[i].charAt(3) == search.charAt(3) && pokeList[i].charAt(4) == search.charAt(4) && pokeList[i].charAt(5) == search.charAt(5) && pokeList[i].charAt(6) == search.charAt(6) && pokeList[i].charAt(7) == search.charAt(7))
		{contentArea.innerHTML += `<button onclick="getPokeInfo(${i+1})"> ${pokeList[i]} </button>`;};
		break;
				
		case 9: if (pokeList[i].charAt(0) == search.charAt(0) && pokeList[i].charAt(1) == search.charAt(1) && pokeList[i].charAt(2) == search.charAt(2) && pokeList[i].charAt(3) == search.charAt(3) && pokeList[i].charAt(4) == search.charAt(4) && pokeList[i].charAt(5) == search.charAt(5) && pokeList[i].charAt(6) == search.charAt(6) && pokeList[i].charAt(7) == search.charAt(7) && pokeList[i].charAt(8) == search.charAt(8))
		{contentArea.innerHTML += `<button onclick="getPokeInfo(${i+1})"> ${pokeList[i]} </button>`;};
		break;
				
		case 10: if (pokeList[i].charAt(0) == search.charAt(0) && pokeList[i].charAt(1) == search.charAt(1) && pokeList[i].charAt(2) == search.charAt(2) && pokeList[i].charAt(3) == search.charAt(3) && pokeList[i].charAt(4) == search.charAt(4) && pokeList[i].charAt(5) == search.charAt(5) && pokeList[i].charAt(6) == search.charAt(6) && pokeList[i].charAt(7) == search.charAt(7) && pokeList[i].charAt(8) == search.charAt(8) && pokeList[i].charAt(9) == search.charAt(9))
		{contentArea.innerHTML += `<button onclick="getPokeInfo(${i+1})"> ${pokeList[i]} </button>`;};
		break;
		}
	}
}