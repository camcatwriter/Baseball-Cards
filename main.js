import { pokemon } from './pokemon.js/index.js'

pokemon.forEach((singleMon) => {
  fetch (singleMon.name[0])
  .then(function(response) {
    return response.json();
  })
  .then (function(myJson) {
    console.log(myJson);
    createPokeCard(myJson)
  });
})



//var card = document.querySelector('.card');
// card.addEventListener( 'mouseover', function() {
//   card.classList.toggle('is-flipped');  
// });


const mainContainer = document.querySelector('.container')

function createPokeCard(pokecard) {
  let card = document.createElement('div')

  // let name = document.createElement('p')
  let caption = document.createElement('figcaption')

  let image = document.createElement('img')

  name.textContent = pokecard.name
  image.src = pokecard.sprites.front_default
  // card.appendChild(name)
  card.appendChild(caption)
  card.appendChild(image)
  
  mainContainer.appendChild(card)
}