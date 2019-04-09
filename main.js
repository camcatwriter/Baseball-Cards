import { pokemon } from './pokemon.js'

const mainContainer = document.querySelector('.container')

function cardFront(pokeData) {
  let cardFront = document.createElement('div')
  cardFront.className = 'card_ face--front'
  let figure = document.createElement('figure')
  let name = document.createElement('figcaption')
  let image = document.createElement('img') 
  image.className = 'pokemon_image' + pokeData.name

  name.textContent = pokeData.name

  if(pokeData.id !== 0) {
    image.src = `../images/${pokeData.imageID}${pokeData.name}.png`
} else {
    image.src = `../images/pokeball.png`
}

  figure.appendChild(image)
  figure.appendChild(name)
  cardFront.appendChild(figure)
  return cardFront
}


function cardBackInfo(pokeData) {
  let infoDiv = document.createElement('div')
  infoDiv.className = 'infoDiv'
  let moveOne = document.createElement('p')
  let moveTwo = document.createElement('p')
  let moveThree = document.createElement('p')
  let moveFour = document.createElement('p')
  moveOne.textContent = pokeData.moves[0].move.name
  moveTwo.textContent = pokeData.moves[1].move.name
  moveThree.textContent = pokeData.moves[2].move.name
  moveFour.textContent = pokeData.moves[3].move.name
  infoDiv.appendChild(moveOne)
  infoDiv.appendChild(moveTwo)
  infoDiv.appendChild(moveThree)
  infoDiv.appendChild(moveFour)
  return infoDiv
}

function cardBack(pokeData) {
  let cardBack = document.createElement('div')
  let backImage = document.createElement('img')
  backImage.className = 'backImage'
  backImage.src = `../images/pokecardBack.png`
  cardBack.className = 'card_face card_face--back'
  cardBack.appendChild(cardBackInfo(pokeData))
  cardBack.appendChild(backImage)
  return cardBack
}

function createPokeCard(pokeData) {
  console.log (pokeData.id)
  let scene = document.createElement('div')
  scene.className = 'scene'
  let card = document.createElement('div')
  card.className = 'card'

  card.appendChild(cardFront(pokeData))
  card.appendChild(cardBack(pokeData))
  
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  })

  scene.appendChild(card)
  mainContainer.appendChild(scene)
}

const allFetchedPokemon = []

pokemon.forEach((singleMon) => {
  fetch(singleMon.url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    allFetchedPokemon.push(myJson)
    createPokeCard(matchIdToImage(myJson))
  })
})

function matchIdToImage(aPokemon) {
  if(aPokemon.id === 0) {
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

function fetchSinglePokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(function(response) {
    return response.json()
  })
  .then(function(retrievedPokemon) {
    createPokeCard(matchIdToImage(retrievedPokemon))
  })
}

class Pokemon {
  constructor (name) {
    this.id = 0,
    this.name = name
    this.moves = [
      {
        move: {
          name: "X",
        },
      },
      {
        move: {
          name: "X",
        },
      },{
        move: {
          name: "X",
        },
      },{
        move: {
          name: "X",
        },
      },
      
    ]
  }
}

newPokemonButton.addEventListener('click', function() {
  createPokeCard(matchIdToImage(new Pokemon('Best Pokemon Ever')))
}
)

var card = document.querySelector('.card');
card.addEventListener('click', function() {
  card.classList.toggle('is-flipped');
});
