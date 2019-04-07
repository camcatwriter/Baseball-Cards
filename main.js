import { pokemon } from './pokemon.js'

const mainContainer = document.querySelector('.container')

class Pokemon {
  constructor (name) {
    this.id = 0,
    this.name = name
  }
}

pokemon.forEach((singleMon) => {
  fetch(singleMon.url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    // console.log(myJson) ;
    createPokeCard((myJson))
  })
})

function createPokeCard(pokeData) {
  console.log (pokeData.id)
  let card = document.createElement('div')
  let figure = document.createElement('figure')
  let name = document.createElement('figcaption')
  let image = document.createElement('img')

  let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
  name.textContent = upperName
  if(pokeData.id !==0) {
    image.src = '../images/${pokeData.id}${upperName}.png'
  } else {
    image.src = '../images/pokeball.png'
  }
 
  figure.appendChild(image)
  figure.appendChild(name)
  mainContainer.appendChild(card)
}

function cardFront(pokeData) {
  let cardFront = document.createElement('div')
  cardFront.className = 'card_face'
  let figure = document.createElement('figure')
  let name = document.createElement('figcaption')
  let image = document.createElement('img')
}

const pokemonButtonOne = document.querySelector('button')
// const pokemonButtonTwo = document.querySelector('button2')

pokemonButtonOne.addEventListener('click', function() {
  let newPokemonName = prompt("Enter a new Pokemon name")
  createPokeCard(new Pokemon(newPokemonName))
})

// pokemonButtonTwo.addEventListener('click', function() {
//   let newPokemonName = prompt("Enter a new Pokemon name")
// })
