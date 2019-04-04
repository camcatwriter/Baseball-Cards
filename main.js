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

function createPokeCard(pokeData) {
  let card = document.createElement('div')
  let name = document.createElement('p')
  let image = document.createElement('img')

  let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
  name.textContent = upperName
  image.src = pokeData.sprites.front_default
  card.appendChild(name)
  card.appendChild(image)
  mainContainer.appendChild(card)
}