import React, { Component } from 'react';
import './App.css';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  updateEntry = () => {
    this.setState({ entryCount: this.state.entryCount + 1 });
  };

  updateExit = () => {
    this.setState({ exitCount: this.state.exitCount + 1 });
  };

  render() {
    return (
      <div className="container">

        <div className="button-row">
          <div className="count-button-pair">
            <button onClick={this.updateEntry}>Login</button>
            <span>{this.state.entryCount} people Entered!!!</span>
          </div>

          <div className="count-button-pair">
            <button onClick={this.updateExit}>Exit</button>
            <span>{this.state.exitCount} people Exited!!!</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountPeople;
