import React, { Component } from 'react';
import Deck from '../utilityClasses/Deck';
import PokerHand from './PokerHand'


var cards = new Deck();
// cards.createDeck();
// console.log(cards.deck);
// cards.shuffleDeck();
// console.log(cards.deck);

class PokerTable extends Component{
  constructor(props){
    super(props);
    this.state={
      dealersHand:[],
      playersHand: [],
      communityCards: []
    }
    this.prepDeck= this.prepDeck.bind(this);
  }
  // this sutff is specific to our game of holdem.
  // deck is outsourced and can be used for any game that needs a shuffled deck of cards


  componentDidMount(){
    this.prepDeck();
  }

  prepDeck(){
    cards.createDeck();
    cards.shuffleDeck();
    // the cards.deck is now ready for a new hand
    var cards1 = cards.deck.shift();
    var cards2 = cards.deck.shift();
    var cards3 = cards.deck.shift();
    var cards4 = cards.deck.shift();
    // cards.deck now has a length of 48 because we mutated it 4 times with shift
    var playersHand = [cards1, cards3];
    var dealersHand = [cards2, cards4];
    this.setState({
      playersHand:playersHand,
      dealersHand:dealersHand
    })
  }
  render(){
    console.log(this.state.playersHand);
    return(
      <div className={"col-sm-12 the-table"}>
        <PokerHand cards={this.state.dealersHand}/>
        <PokerHand cards={this.state.communityCards}/>
        <PokerHand cards={this.state.playersHand}/>
      </div>
    )
  }
}

export default PokerTable;