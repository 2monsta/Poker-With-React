import React, {Component} from 'react';

class GameButtons extends Component{
  constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);
    this.handleBet=this.handleBet.bind(this);
  }

  handleClick(){
    this.props.dealFunction();
  }
  handleBet(){
    this.props.betFunction(10);
  }
  render(){
    return (
      <div className={"col-sm-12 buttons"}>
        <div className={"col-sm-4"}>
         <button onClick={this.handleClick} className={"btn btn-danger"}> Deal </button>
        </div>
        <div className={"col-sm-4"}>
          <button onClick={this.handleBet} className={"btn btn-warning"}> Bet 10 </button>
        </div>
      </div>
    )
  }
}
export default GameButtons;