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

//Searchbar's function to access the Pokemon API
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
    // const { stats, types } = data;
    
    pokeId.textContent = `Nº ${data.id}`
    pokeImg.setAttribute('src', sprite);     
    pokeName.textContent = data.name;
    
}

//Function to render error
const renderNotFound = () => {
    pokeName.textContent = 'Not found... Who\'s that Pokemon?';
    pokeImg.setAttribute('src', 'pokeMissing.png');
    pokeImg.style.background =  '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}