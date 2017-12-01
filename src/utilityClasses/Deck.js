// we could wrigte a normal function but lets go OOP
class Deck{
  constructor(){
    // no need to extend because ...it's not a subclass'
    this.deck =[];
  }
  createDeck(){
    // reset the dec
    this.deck = [];
    // two loops, one for suit, one for card value
    const suits =['h', 's', 'd', 'c'];
    for(let s =0; s<suits.length; s++){
      for(let c =1; c<=13; c++){
        // push the combination of c and s into this.deck
        this.deck.push(c+suits[s]);
      }
    }
    // return this.deck;
  }
  shuffleDeck(){
    // swap 2 random indicies in the array many many times
    for(let i =0; i< 100000; i++){
      var rand1 = Math.floor(Math.random()*52);
      var rand2 = Math.floor(Math.random()*52);
      var temp = this.deck[rand1];
      this.deck[rand1] = this.deck[rand2];
      this.deck[rand2] = temp;
    }
  }

}

export default Deck;