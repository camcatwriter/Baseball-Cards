import { pokemon } from './pokemon.js'

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson) ;
  })

console.log(pokemon)

function createPokeCard(pokedata) {
  
}