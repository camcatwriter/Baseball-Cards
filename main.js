import { pokemon } from './pokemon.js'

pokemon.forEach((singleMon) => {
  fetch(singleMon.url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson) ;
    createPokeCard(myJson)
  })
})



console.log(pokemon)

const mainContainer = document.querySelector('.container')

function createPokeCard(pokedata) {
  let card = document.createElement('div')
  let name = document.createElement('p')
  let image = document.createElement('img')

  name.textContent = pokedata.name
  image.src = pokedata.sprites.front_default
  card.appendChild(name)
  card.appendChild(image)
  mainContainer.appendChild(card)
}