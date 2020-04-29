import React from "react";

import ContactCard from "./components/ContactCard";
import Decrement from "./components/Decrement";

import "./App.css";

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
