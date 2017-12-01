import React, {Component} from 'react';


class Card extends Component{
  render(){
    const theCard = `/cards/${this.props.card}.png`;
    return(
      <div className={"col-sm-2 card"}>
        <img src={theCard} alt=""/>
      </div>
    )
  }
}

export default Card;