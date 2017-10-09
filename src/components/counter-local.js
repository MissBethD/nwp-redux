import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: 0
  };

  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  render() {
    return (
      <div>
        <span className="counter">{this.state.value}</span>
        <button className="button" onClick={this.increment}>
          +
        </button>
        <button className="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}
