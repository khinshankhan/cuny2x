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
      <div>
        {key[0].toUpperCase() + key.slice(1)}: {this.props[key]}
        <br />
      </div>
    ));
  }

  render() {
    return (
      <div className="App">
        <h3>Contact Card:</h3>
        <div>{this.renderFromProps()} </div>
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string,
  personal: PropTypes.string,
  work: PropTypes.string.isRequired,
  email: PropTypes.string
};

ContactCard.defaultProps = {
  name: "name",
  personal: "2",
  work: "3",
  email: "4"
};

export default class App extends React.Component {
  render() {
    return (
      <header className="App-header">
        <ContactCard
          name="First Guy"
          personal="(123) 456 7890"
          work="(123) 456 7891"
          email="first.guy@gmail.com"
        />
        <ContactCard
          name="Second Guy"
          personal="(231) 456 7890"
          work="(231) 456 7891"
          email="second.guy@gmail.com"
        />
        <ContactCard
          name="Third Guy"
          personal="(321) 456 7890"
          work="(321) 456 7891"
          email="third.guy@gmail.com"
        />
      </header>
    );
  }
}
