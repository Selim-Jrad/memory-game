document.addEventListener('DOMContentLoaded', () => {
  //list all card options
  const cardArray = [
    {
      name: 'Adiamonds',
      img: 'Adiamonds.png'
    },
    {
      name: 'Ahearts',
      img: 'Ahearts.png'
    },
    {
      name: 'Jhearts',
      img: 'Jhearts.png'
    },
    {
      name: 'mfw_imoutofideas',
      img: 'mfw_imoutofideas.png'
    },
    {
      name: 'Ihatemylife',
      img: 'Ihatemylife.png'
    },
    {
      name: 'Aclubs',
      img: 'Aclubs.png'
    },
    {
      name: 'Adiamonds',
      img: 'Adiamonds.png'
    },
    {
      name: 'Ahearts',
      img: 'Ahearts.png'
    },
    {
      name: 'Jhearts',
      img: 'Jhearts.png'
    },
    {
      name: 'mfw_imoutofideas',
      img: 'mfw_imoutofideas.png'
    },
    {
      name: 'Ihatemylife',
      img: 'Ihatemylife.png'
    },
    {
      name: 'Aclubs',
      img: 'Aclubs.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'blank.png')
      cards[optionTwoId].setAttribute('src', 'blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'white.png')
      cards[optionTwoId].setAttribute('src', 'white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'blank.png')
      cards[optionTwoId].setAttribute('src', 'blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card, also, no words created by god can describe the amount of stress i had making this game, i hate it and i hate this code
  //but i really hope you like it fr fr
  //plz like it
  //i need you to like it
  //alse pepe is here
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
