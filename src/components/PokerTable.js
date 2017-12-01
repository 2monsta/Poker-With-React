import React, { Component } from 'react';
import Deck from '../utilityClasses/Deck';
import PokerHand from './PokerHand';
import GameButtons from './GameButtons';


var cards = new Deck();
// cards.createDeck();
// console.log(cards.deck);
// cards.shuffleDeck();
// console.log(cards.deck);

class PokerTable extends Component{
  constructor(props){
    super(props);
    this.state={
      dealersHand:['deck','deck'],
      playersHand: ['deck','deck'],
      communityCards: ['deck','deck','deck','deck','deck'],
      wager: 0,
      bankRoll: 1000
    };
    this.prepDeck= this.prepDeck.bind(this);
    this.draw=this.draw.bind(this);
    this.playerBet= this.playerBet.bind(this);
  }
  // this sutff is specific to our game of holdem.
  // deck is outsourced and can be used for any game that needs a shuffled deck of cards
  prepDeck(){
    cards.createDeck();
    cards.shuffleDeck();
    // the cards.deck is now ready for a new hand
    let cards1 = cards.deck.shift();
    let cards2 = cards.deck.shift();
    let cards3 = cards.deck.shift();
    let cards4 = cards.deck.shift();
    // cards.deck now has a length of 48 because we mutated it 4 times with shift
    let playersHand = [cards1, cards3];
    let dealersHand = [cards2, cards4];
    this.setState({
      playersHand:playersHand,
      dealersHand:dealersHand
    })
  }
  // this methid is called whenever a new community card must be drawn.
  // it is always called aftera  betting round is finished( except for the last);
  draw(){
    var communityNewHand = this.state.communityCards;
    if(communityNewHand[0]==='deck'){
      //start over
      communityNewHand = [cards.deck.shift(),cards.deck.shift(),cards.deck.shift()];
    }else{
      //push
      communityNewHand.push(cards.deck.shift());
    }
    this.setState({
      communityCards:communityNewHand
    });
  }
  //this method will be send gamebuttons and is used to update the players bet.
  // we will call draw after they have bet
  playerBet(amount){
    const newWager = this.state.wager + amount;
    console.log(newWager);
    this.setState({
      wager: newWager
    });
    this.draw();
  }
  render(){
    console.log(this.state.playersHand);
    return(
      <div className={"col-sm-12 the-table"}>
        <PokerHand cards={this.state.dealersHand}/>
        <PokerHand cards={this.state.communityCards}/>
        <PokerHand cards={this.state.playersHand}/>
        <GameButtons
          dealFunction={this.prepDeck}
          betFunction={this.playerBet}
        />

      </div>
    )
  }
}

export default PokerTable;