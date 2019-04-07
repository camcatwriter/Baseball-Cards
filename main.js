import { pokemon } from './pokemon.js'

const mainContainer = document.querySelector('.container')

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

function matchIdToImage(aPokemon) {
  if(aPokemon.id ===0) {
    aPokemon.imageID = 0
  }
  if(aPokemon.id < 10) {
    aPokemon.imageID = "00" + aPokemon.id
  }
  if(aPokemon.id > 9 && aPokemon.id < 100 ) {
    aPokemon.imageID = "0" + aPokemon.id
  }
  if(aPokemon.id > 99) {
    aPokemon.imageID = aPokemon.id
  }
  aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1)
  return aPokemon
}

class Pokemon {
  constructor (name) {
    this.id = 0,
    this.name = name
  }
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
