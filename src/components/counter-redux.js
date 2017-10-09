import React, { Component } from "react";
import store from "../store";

export default class Counter extends Component {
  componentDidMount() {
    // This will run on any update from the store.
    // Not optimal.
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  increment = () => {
    store.dispatch({
      type: "INCREMENT"
    });
  };
  decrement = () => {
    store.dispatch({
      type: "DECREMENT"
    });
  };

  render() {
    const { counter } = store.getState();
    return (
      <div>
        <span className="counter">{counter}</span>
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
