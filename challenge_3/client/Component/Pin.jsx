import React from "react";
import PinBoard from "./PinBoard.jsx";

class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: [],
      ball: [],
      pins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
    this.handleBall = this.handleBall.bind(this);

    this.handleFrame = this.handleFrame.bind(this);
    this.handlePins = this.handlePins.bind(this);
    this.resetPins = this.resetPins.bind(this);
  }
  handleFrame(input) {
    this.setState({ frame: [...this.state.ball] }, () => {
      console.log(this.state.frame);
    });
  }
  resetPins() {
    this.setState({
      pins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ball: []
    });
  }

  resetFrame() {}

  handlePins(pinDown) {
    this.setState({ pins: this.state.pins.slice(0, 11 - pinDown) });
  }

  handleBall(event) {
    event.preventDefault();
    const pinDown = event.target.value;

    if (this.state.ball.length <= 1) {
      this.setState({ ball: this.state.ball.concat(pinDown) }, () => {
        console.log(this.state.ball);
        this.handlePins(pinDown);
      });
    } else {
      this.resetPins();
    }
  }

  render() {
    return (
      <div id="main">
        <h1>Click on Number of pins down</h1>
        <div id="fourthRow">
          {this.state.pins.map(pin => (
            <PinBoard
              key={this.state.pins.indexOf(pin)}
              pin={pin}
              handleBall={this.handleBall}
            />
          ))}
        </div>
        <br></br>
        <div id="frame">
          Frame:
          <button type="number" max="12">
            {this.state.frame.length + 1}
          </button>
          Ball:
          <button type="number" min="1" max="2" required>
            {this.state.ball.length + 1}
          </button>
        </div>
      </div>
    );
  }
}

export default Pin;
