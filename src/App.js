import { Component } from "react";

import Clock from "./components/clocklist/clockview";

import "./App.css";

class App extends Component {
  state = { showClock: false };

  toggleButton = () => {
    this.setState((prevState) => {
      const { showClock } = prevState;
      return {
        showClock: !showClock,
      };
    });
  };

  render() {
    const { showClock } = this.state;

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.toggleButton}
        >
          {showClock ? "Hide Clock" : "Show Clock"}
        </button>
        {showClock && <Clock />}
      </div>
    );
  }
}

export default App;
