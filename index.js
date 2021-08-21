const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');

//Searchbar's function to access the Pokemon API
const searchPokemon = (event) =>{
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data => data.json())
    .then(response => renderPokemonData(response))
    .catch(err => renderNotFound())
}

let renderPokemonData = () =>{

}

const renderNotFound = () => {
    pokeName.textContent = 'Not found... Who\'s that Pokemon?';
    pokeImg.setAttribute('src', 'pokeMissing.png');
    pokeImg.style.background =  '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}