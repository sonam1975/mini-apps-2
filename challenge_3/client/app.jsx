import React from "react";
import ReactDOM from "react-dom";
import Pin from "./Component/Pin.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: [],
      score: []
    };

    this.handleScore = this.handleScore.bind(this);
    this.handleFrame = this.handleFrame.bind(this);
  }
  handleFrame() {}
  handleScore(value) {
    this.setState({ score: this.state.score.push(value) });
  }

  render() {
    return <Pin handleFrame={this.handleFrame} />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
