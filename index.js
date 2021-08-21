//Selecting Card's components
const pokeCard = document.querySelector('[card]');
const pokeId = document.querySelector('[id]');
const pokeImgContainer = document.querySelector('[img-container]');
const pokeImg = document.querySelector('[img]');
const pokeName = document.querySelector('[poke-name]');
const pokeTypes = document.querySelector('[types]');
const pokeWeight = document.querySelector('[weight]');
const pokeHeight = document.querySelector('[height]');
const pokeStats = document.querySelector('[stats]');

// Dictionary for colors based on types
const typeColors = {
        electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
}

// Searchbar's function to access the Pokemon API
const searchPokemon = (event) =>{
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data => data.json())
    // Calling function to render Pokémon
    .then(response => renderPokemonData(response))
    // Calling function for the invalid input
    .catch(err => renderNotFound())
}

let renderPokemonData = (data) =>{
    console.log(data)
    const sprite = data.sprites.front_default
    const { stats, types } = data;
    
    // Retrieving data
    pokeId.textContent = `Nº ${data.id}`
    pokeImg.setAttribute('src', sprite);     
    pokeName.textContent = data.name;
    pokeHeight.textContent = `Height: ${data.height/10} m`
    pokeWeight.textContent = `Weight: ${data.weight/10} kg`
    // setCardColor(types);
    // renderPokemonTypes(types);
    // renderPokemonStats(stats);
}

// let setCardColor = (types) => {
//     const colorOne = typeColors[types[0].type.name];
// }

//Function to render error
const renderNotFound = () => {
    pokeId.textContent = '';
    pokeName.textContent = '?... Not found... Who\'s that Pokemon?';
    pokeImg.setAttribute('src', 'pokeMissing.png');
    pokeImg.style.background =  '#fff';
    pokeTypes.innerHTML = '';
    pokeHeight.textContent = '';
    pokeWeight.textContent = '';
    pokeStats.innerHTML = '';
}