import React from "react";
import PropTypes from "prop-types";

import "../App.css";

export default class ContactCard extends React.Component {
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
