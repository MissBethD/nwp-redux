import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className="counter">{this.props.counter}</span>
        <button className="button" onClick={this.props.increment}>
          +
        </button>
        <button className="button" onClick={this.props.decrement}>
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () =>
      dispatch({
        type: "INCREMENT"
      }),
    decrement: () =>
      dispatch({
        type: "DECREMENT"
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
