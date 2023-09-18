import React from "react";
import attack from "../Images/attack.png";
import defend from "../Images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.state = {
      count: 0,
      gameStatus: "",
      lastPlay: "",
    };
  }
  handleAttack() {
    this.setState((prevState) => {
      let newCount = prevState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        gameStatus: newCount >= 10 ? "You won" : prevState.gameStatus,
        lastPlay: "Attack",
      };
    });

    // alert("Attack clicked");
    // this.setState({count:this.state.count+1});
  }
  handleDefence() {
    // alert("Defend clicked");
    // this.setState({count:this.state.count-1});

    this.setState((prevState) => {
      let newCount = prevState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
        gameStatus: newCount <= -10 ? "You lost" : prevState.gameStatus,
        lastPlay: "Defence",
      };
    });
  }
  handleReset() {
    this.setState((prevState) => {
      return {
        count: (prevState.count = 0),
        gameStatus: (prevState.gameStatus = ""),
        lastPlay: "",
      };
    });
  }
  handleRandom() {
    let playMode = Math.round(Math.random());
    if (playMode === 0) {
      this.handleAttack();
    } else {
      this.handleDefence();
    }
  }

  render() {
    return (
      <div className="row text-center text-white">
        <h1>Game Score : {this.state.count}</h1>
        <p>You win at +10 points and lose at -10 points</p>
        <p>Last Play:{this.state.lastPlay} </p>
        <h3>Game Status :{this.state.gameStatus} </h3>
        {/* <button onClick={this.handleAttack} style={{ width: "200px" }}>
          {" "}
          +1{" "}
        </button> */}
        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={attack}
            alt="attack"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            onClick={this.handleAttack}
          />
        </div>
        {/* <button onClick={this.handleDefence} style={{ width: "200px" }}>
          {" "}
          -1{" "}
        </button> */}
        <div className="col-6 col-md-3 ">
          <img
            src={defend}
            alt="defend"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            onClick={this.handleDefence}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-3"
            onClick={this.handleRandom}
          >
            Random Play
          </button>
          <br />
          <button
            className="btn btn-warning w-100 mt-3"
            onClick={this.handleReset}
          >
            reset
          </button>
        </div>
      </div>
    );
  }
}
