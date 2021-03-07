'use strict';
const suits = ["♧", "♤", "♥", "♦"];
const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];
const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Create a Deck of Cards ♤♧♦♥
const createDeck = () => {
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let combined = {Ranks: ranks[j], Suits: suits[i], Index: index[j]};
      deck.push(combined);
    } 
  }
  return deck;
};

let decks = createDeck();


//Shuffle the Decks
const shuffleDeck = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

const reShuffleTheDecks = (arr) => {
  let decks = arr;
  decks = location.reload();
  console.log(decks);
}


//Arrange it by Suits
const arrangedBySuit = (arr) => {
  let sortedDeck = arr.sort((a, b) => {
    if(a.Suits > b.Suits) return 1;
    else if(a.Suits < b.Suits) return -1;
    else 0;
  });
  return sortedDeck;
};

const arrangedByRankAscending = (arr) => {
  let sortedRank = arr.sort((a, b) => {
    if(a.Index > b.Index) return 1;
    else if(a.Index < b.Index) return -1;
    else 0;
  });
  return sortedRank;
};

const arrangedByRankDescending = (arr) => {
  return arrangedByRankAscending(arr).reverse();
};

const suitToWord = (symbol) => {
  switch(symbol){
    case "♧":
      return " of Clubs";
    case "♤":
      return " of Spades";
    case "♥":
      return " of Hearts";
    case "♦":
      return " of Diamonds";
  }
}

const rankToWord = (rank) => {
  switch(rank){
    case "A":
      return "Ace";
    case "2":
      return "Two";
    case "3":
      return "Three";
    case "4":
      return "Four";
    case "5":
      return "Five";
    case "6":
      return "Six";
    case "7":
      return "Seven";
    case "8":
      return "Eight";
    case "9":
      return "Nine";
    case "10":
      return "Ten";
    case "J":
      return "Jack";
    case "Q":
      return "Queen";
    case "K":
      return "King";
  }
}

const dealOneCard = (arr) => {
  shuffleDeck(arr);
  let dealCard = arr.shift();
  let toWords = rankToWord(dealCard.Ranks) + suitToWord(dealCard.Suits);
  if(arr.length === 0){
    return "No More Cards"
  }
  return toWords;
}

const dealFiveCards = (arr) => {
  shuffleDeck(arr);
  let dealCard = arr.splice(Math.floor(Math.random() * arr.length), 5);
  if(arr.length === 0){
    return "No More Cards"
  }
  return dealCard;
}



