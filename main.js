import { pokemon } from './pokemon.js'

pokemon.forEach((singleMon) => {
  fetch(singleMon.url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    // console.log(myJson) ;
    createPokeCard(myJson)
  })
})



// console.log(pokemon)

const mainContainer = document.querySelector('.container')

function createPokeCard(pokeData) {
  console.log (pokeData.id)
  let card = document.createElement('div')
  let figure = document.createElement('figure')
  let name = document.createElement('figcaption')
  let image = document.createElement('img')

  let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
  name.textContent = upperName
  image.src = `../images/${pokeData.id}${upperName}.png`
  figure.appendChild(image)
  figure.appendChild(name)
  card.appendChild(figure)
  mainContainer.appendChild(card)
}