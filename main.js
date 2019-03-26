import { pokemon } from './pokemondata.js'

fetch ('link')
  .then(function(response) {
    return response.json();
  })
  .then (function(myJson) {
    console.log(myJson);
    createPokeCard(myJson)
  });

//var card = document.querySelector('.card');
// card.addEventListener( 'mouseover', function() {
//   card.classList.toggle('is-flipped');  
// });


const mainContainer = document.querySelector('.container')

function createPokeCard(pokecard) {
  let card = document.createElement('div')
  let name = document.createElement('p')

  name.textContent = pokecard.name
  card.appendChild(name)
  
  mainContainer.appendChild(card)
}