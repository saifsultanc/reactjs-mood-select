import React, { Component } from "react";
import SelectEmoji from "./SelectEmoji";
import Happy from "./Happy";
import Sad from "./Sad";
import Confused from "./Confused";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: -1
    };
  }

  getEmotion = value => {
    this.setState({ selectedOption: value });
  };

  render() {
    return (
      <div>
        <SelectEmoji onChange={this.getEmotion} />
        <div className="Screen F(left) W(100vw)">
          {this.state.selectedOption === 0 && <Happy />}
          {this.state.selectedOption === 1 && <Sad />}
          {this.state.selectedOption === 2 && <Confused />}
          {this.state.selectedOption === 3 && <h1>Please try again!</h1>}
        </div>
      </div>
    );
  }
}

export default App;
