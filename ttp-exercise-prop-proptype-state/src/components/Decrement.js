import React from "react";
import PropTypes from "prop-types";

import "../App.css";

export default class Decrement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.counter
    };
  }

  myButton = (text, bg, callback) => {
    return (
      <button
        type="button"
        style={{
          color: "white",
          backgroundColor: bg,
          padding: "15px 32px",
          borderRadius: "50%"
        }}
        onClick={callback}
      >
        {text}
      </button>
    );
  };

  decrease = () => {
    if (this.state.counter === 0) {
      alert("Cannot be less than zero");
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="App">
        <h3>Decrement</h3>
        {this.state.counter}
        <br />
        {this.myButton("(-)", "red", this.decrease)}
        {this.myButton("(+)", "blue", this.increase)}
      </div>
    );
  }
}

Decrement.propTypes = {
  counter: PropTypes.number.isRequired
};
