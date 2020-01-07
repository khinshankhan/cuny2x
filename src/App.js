import React from "react";
import PropTypes from "prop-types";
import "./App.css";

class ContactCard extends React.Component {
  constructor(props) {
    super(props);

    this._myHandler = this._myHandler.bind(this);
  }

  _myHandler(props) {
    console.log(props);
  }

  renderFromProps() {
    return Object.keys(this.props).map(key => (
      <div key={key}>
        {key[0].toUpperCase() + key.slice(1)}: {this.props[key]}
        <br />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h3>Contact Card:</h3>
        <div>{this.renderFromProps()} </div>
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  personal: PropTypes.string.isRequired,
  work: PropTypes.string,
  email: PropTypes.string.isRequired
};

class Decrement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this._myHandler = this._myHandler.bind(this);
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  _myHandler(props) {
    console.log(props);
  }

  myButton(context, color, callback) {
    return (
      <button
        type="button"
        style={{
          color: "white",
          backgroundColor: color,
          padding: "15px 32px",
          borderRadius: "50%"
        }}
        onClick={callback}
      >
        {context}
      </button>
    );
  }

  decrease() {
    if (this.state.counter === 0) {
      alert("Cannot be less than zero");
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  increase() {
    this.setState({ counter: this.state.counter + 1 });
  }

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

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <header className="App-header">
          <h1>Contact Card & Decrement</h1>
          <h3>Scroll Down!</h3>
        </header>
        <header className="App-header">
          <ContactCard
            name="John Racs"
            personal="(123) 456 7890"
            work="(123) 456 7891"
            email="john.racs@gmail.com"
          />
          <ContactCard
            name="Mark Scar"
            personal="(213) 456 7890"
            work="(213) 456 7891"
            email="mark.scar@gmail.com"
          />
          <ContactCard
            name="Cathy Cars"
            personal="(321) 456 7890"
            work="(321) 456 7891"
            email="cathy.cars@gmail.com"
          />
        </header>
        <header className="App-header">
          <Decrement counter={0} />
        </header>
      </div>
    );
  }
}
