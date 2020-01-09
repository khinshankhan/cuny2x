import React from "react";
import axios from "axios";

import GifCard from "./GifCard";

export default class Giphy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: []
    };
  }

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    console.log("hiiiii");
    let url =
      "http://api.giphy.com/v1/gifs/search?q=" +
      this.state.query +
      "&api_key=kCdfDRHFr9wSutGKEqJo9mqx3hBndt91";
    console.log(url);

    axios
      .get(url)
      .then(response => {
        this.setState({ results: response.data.data });
      })
      .catch(error => {
        this.setState({ results: [] });
      });
    event.preventDefault();
  };

  render() {
    let results = this.state.results.map(elem => (
      <GifCard key={elem.url} url={elem.images.downsized_large.url} />
    ));

    return (
      <div id="app">
        <form onSubmit={this.handleSubmit}>
          <label>City: </label>
          <input
            type="text"
            placeholder="Enter search terms"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <div id="header">
          {this.state.results.length > 0 ? (
            <div className="results">{results}</div>
          ) : (
            <div>No results</div>
          )}
        </div>
      </div>
    );
  }
}
