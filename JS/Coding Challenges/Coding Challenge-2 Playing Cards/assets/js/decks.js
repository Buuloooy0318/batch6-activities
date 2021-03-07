'use strict';


// Deck of Cards ♤♧♦♥
let decks = ["♧A","♤A","♥A","♦A",
			       "♧2","♤2","♥2","♦2",
             "♧3","♤3","♥3","♦3",
             "♧4","♤4","♥4","♦4",
             "♧5","♤5","♥5","♦5",
             "♧6","♤6","♥6","♦6",
             "♧7","♤7","♥7","♦7",
             "♧8","♤8","♥8","♦8",
             "♧9","♤9","♥9","♦9",
             "♧10","♤10","♥10","♦10",
             "♧J","♤J","♥J","♦J",
             "♧Q","♤Q","♥Q","♦Q",
             "♧K","♤K","♥K","♦K"
];

let newDecks = [];

// let decks2 = decks.splice();

//Shuffle the Decks
function shuffleDecks(arr){
  console.log("Shuffled");
	for(let i = arr.length - 1; i > 0; i--){
  	const j = Math.floor(Math.random() * (i + 1));
    const result = arr[i];
    arr[i] = arr[j];
    arr[j] = result;
  }
   console.log(arr);
};

function reShuffleTheDecks(arr){
  let decks = arr;
  decks = location.reload();
  console.log(decks);
};

//Arrange it by Suits
function arrangedBySuits(arr){
  console.log("Arranged by Suits");
  const groupTogether = arr.reduce((result, word) => {
  const letter = word[0];
  result[letter] = result[letter] || [];
  result[letter].push(word);
  return result;
  }, {});
  console.log(groupTogether);
};


// Sorting the Deck Ascending / Descending
// function sortAscending(arr){
//   console.log("Ascending");
//   const sort = arr.sort((a, b) => a - b);

//   console.log(sort);
// }

// function sortDescending(arr){
//   console.log("Descending");
//   const sort = arr.sort((a, b) => b - a);

//   console.log(sort);
// }

//   function sortDeckBySuit(arr){
//     let deckArray = [];
//     for (const suit of decks){
//         for (const card of arr){
//             if (card[0] == decks) { deckArray.push(card) }
//             }
//     }
//     return deckArray;
// }


// split every item inside the sorting function
// get the first element // either suit or rank
// get the index
// then compare

function sortBy(arr){
    return arr.sort((a, b) => {
    let itemA
    })
  }

    
// }
// function sort(arr){
//   let sortDeck = newDeck;
//   sortDeck = arr.sort((a, b) => a - b);
//   console.log(sortDeck);
// }


// Sorting the Deck Ascending
function sortAscending(arr){
  const array = arr;
  arr = [];
  array.length = 0;
  console.log("Ascending");
  array.splice(0, array.length);
  let decks = ["♧A","♤A","♥A","♦A",
			       "♧2","♤2","♥2","♦2",
             "♧3","♤3","♥3","♦3",
             "♧4","♤4","♥4","♦4",
             "♧5","♤5","♥5","♦5",
             "♧6","♤6","♥6","♦6",
             "♧7","♤7","♥7","♦7",
             "♧8","♤8","♥8","♦8",
             "♧9","♤9","♥9","♦9",
             "♧10","♤10","♥10","♦10",
             "♧J","♤J","♥J","♦J",
             "♧Q","♤Q","♥Q","♦Q",
             "♧K","♤K","♥K","♦K"
];
  console.log(decks);
};

// Sorting the Deck Descending
function sortDescending(arr){
  const array = arr;
  arr = [];
  array.length = 0;
  console.log("Descending");
  array.splice(0, array.length);
  let decks = ["♧A","♤A","♥A","♦A",
			       "♧2","♤2","♥2","♦2",
             "♧3","♤3","♥3","♦3",
             "♧4","♤4","♥4","♦4",
             "♧5","♤5","♥5","♦5",
             "♧6","♤6","♥6","♦6",
             "♧7","♤7","♥7","♦7",
             "♧8","♤8","♥8","♦8",
             "♧9","♤9","♥9","♦9",
             "♧10","♤10","♥10","♦10",
             "♧J","♤J","♥J","♦J",
             "♧Q","♤Q","♥Q","♦Q",
             "♧K","♤K","♥K","♦K"
];
  console.log(decks.reverse());
};


// // Sorting the Deck Ascending
// function sortAscending(arr){
//   const array = arr;
//   console.log("Ascending");
//   let j = array.length
//   let segment = 13;
//   let subset;

//   for(let i = 0; i < j; i += segment){
//     subset = array.slice(i, i + segment);
//     console.log(subset)
//   }
// };

// // Sorting the Deck Descending
// function sortDescending(arr){
//   const array = arr;
//   console.log("Descending");
//   arr.reverse();
//   let j = array.length
//   let segment = 13;
//   let subset;

//   for(let i = 0; i < j; i += segment){
//     subset = array.slice(i, i + segment);
//     console.log(subset)
//   }
// };

//Switch Function names from Ace to King
function nameDeck(num){
  switch(num){
    case "A":
      return "Ace";
      break;
    case "2":
      return "Two";
      break;
    case "3":
      return "Three";
      break;
    case "4":
      return "Four";
      break;
    case "5":
      return "Five";
      break;
    case "6":
      return "Six";
      break;
    case "7":
      return "Seven";
      break;
    case "8":
      return "Eight";
      break;
    case "9":
      return "Nine";
      break;
    case "10":
      return "Ten";
      break;
    case "J":
      return "Jack";
      break;
    case "Q":
      return "Queen";
      break;
    case "K":
      return "King";
      break;
    default:
      return num;
  }
}
  
//Deal one card from the deck
function dealCard(arr){
  let arr1 = arr;
  console.log("Deal Random Card:");
  let randomCard = arr1[Math.floor((Math.random() * decks.length))]; //random / shuffle the card
  arr1.splice(arr1.indexOf(randomCard), 1); // Deal one card using splice
  let num;
  if(randomCard[2] != undefined){
    num = randomCard[1] + randomCard[2];
  }else{
    num = randomCard[1];
  }
    if(randomCard[0] === "♧"){
      console.log(arr1);
      console.log(nameDeck(num) + " of Clovers");
    }
    else if(randomCard[0] === "♤"){
      console.log(arr1);
      console.log(nameDeck(num) + " of Spades");
    }
    else if(randomCard[0] === "♥"){
      console.log(arr1);
      console.log(nameDeck(num) + " of Hearts");
    }
    else if(randomCard[0] === "♦"){
      console.log(arr1);
      console.log(nameDeck(num) + " of Diamonds");
    }
  }

  function dealFiveCard(arr){
    let arr1 = arr;
    console.log("Deal Five Cards:");
    let randomCard = arr1[Math.floor((Math.random() * decks.length))]; //random / shuffle the card
    arr1.splice(arr1.indexOf(randomCard), 5); // Deal one card using splice
    let num;
    if(randomCard[2] != undefined){
      num = randomCard[1] + randomCard[2];
    }else{
      num = randomCard[1];
    }
      if(randomCard[0] === "♧"){
        console.log(arr1);
        console.log(nameDeck(num) + " of Clovers");
      }
      else if(randomCard[0] === "♤"){
        console.log(arr1);
        console.log(nameDeck(num) + " of Spades");
      }
      else if(randomCard[0] === "♥"){
        console.log(arr1);
        console.log(nameDeck(num) + " of Hearts");
      }
      else if(randomCard[0] === "♦"){
        console.log(arr1);
        console.log(nameDeck(num) + " of Diamonds");
      }
    }


