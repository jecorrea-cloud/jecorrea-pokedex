//Selecting Card's components
const pokeCard = document.querySelector("[card]");
const pokeId = document.querySelector("[id]");
const pokeImgContainer = document.querySelector("[img-container]");
const pokeImg = document.querySelector("[img]");
const pokeName = document.querySelector("[poke-name]");
const pokeTypes = document.querySelector("[types]");
const pokeWeight = document.querySelector("[weight]");
const pokeHeight = document.querySelector("[height]");
const pokeStats = document.querySelector("[stats]");

// Dictionary for colors based on types
const colors = {
  bug: "#90ee92",
  default: "#2A1A1F",
  dragon: "#db5572",
  electric: "#f3da4e",
  fighting: "#353434",
  fire: "#f33224",
  flying: "#69e4bf",
  ghost: "#410910",
  grass: "#2ba784",
  ground: "#b69459",
  ice: "#8fe1fc",
  normal: "#9c868a",
  poison: "#855667",
  psychic: "#fca9c5",
  rock: "#858085",
  steel: "#148c9c",
  water: "#0598c9",
};

// Searchbar's function to access the Pokemon API
const searchPokemon = (event) => {
  event.preventDefault();
  const { value } = event.target.pokemon;
  fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then((data) => data.json())

    // Calling function to render Pokémon
    .then((response) => renderPokemonData(response))
    
    // Calling function for the invalid input
    .catch((err) => renderNotFound());
};

const renderPokemonData = (data) => {
  console.log(data);
  const sprite = data.sprites.front_default;
  const { stats, types } = data;

  // Retrieving data
  pokeId.textContent = `Nº ${data.id}`;
  pokeImg.setAttribute("src", sprite);
  pokeName.textContent = data.name;
  pokeHeight.textContent = `Height: ${data.height / 10} m`;
  pokeWeight.textContent = `Weight: ${data.weight / 10} kg`;
  setCardColor(types);
  renderPokemonTypes(types);
  renderPokemonStats(stats);
};

const setCardColor = (types) => {
    console.log("setting color based on types")
  const colorOne = colors[types[0].type.name];
  const colorTwo = types[1] ? colors[types[1].type.name] : colors.default;
  pokeImg.style.background = `radial-gradient(${colorTwo}, ${colorOne})`;
  pokeImg.style.backgroundSize = "3px 3px";
};

const renderPokemonTypes = (types) => {
    console.log("displaying types")
  pokeTypes.innerHTML = "";
  types.forEach((type) => {
    const typeTextElement = document.createElement("div");
    typeTextElement.style.color = colors[type.type.name];
    typeTextElement.textContent = type.type.name;
    pokeTypes.appendChild(typeTextElement);
  });
};

const renderPokemonStats = (stats) => {
    console.log("doing stats")

    pokeStats.innerHTML = "";
    stats.forEach((stat) => {
      const statElement = document.createElement("div");
      const statName = document.createElement("div");
      const statValue = document.createElement("div");

      statName.textContent = stat.stat.name;
      statValue.textContent = stat.base_stat;

      statElement.appendChild(statName);
      statElement.appendChild(statValue);

      pokeStats.appendChild(statElement);
    })
}

//Function to render error
const renderNotFound = () => {
  console.log("Bad input!")

  pokeId.textContent = "";
  pokeName.textContent = "?... Not found... Who's that Pokemon?";
  pokeImg.setAttribute("src", "pokeMissing.png");
  pokeImg.style.background = "#fff";
  pokeTypes.innerHTML = "";
  pokeHeight.textContent = "";
  pokeWeight.textContent = "";
  pokeStats.innerHTML = "";
};
