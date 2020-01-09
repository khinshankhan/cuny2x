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

  apiCall = (urlBeginning, query) => {
    let url =
      urlBeginning + query + "&api_key=kCdfDRHFr9wSutGKEqJo9mqx3hBndt91";

    axios
      .get(url)
      .then(response => {
        if (urlBeginning !== "http://api.giphy.com/v1/gifs/random?") {
          this.setState({ results: response.data.data });
        } else {
          this.setState({ results: [response.data.data] });
        }
      })
      .catch(error => {
        this.setState({ results: [] });
      });
  };

  handleSubmit = event => {
    this.apiCall("http://api.giphy.com/v1/gifs/search?q=", this.state.query);
    event.preventDefault();
  };

  handleTrending = event => {
    this.apiCall("http://api.giphy.com/v1/gifs/trending?", "");
    event.preventDefault();
  };

  handleRandom = event => {
    this.apiCall("http://api.giphy.com/v1/gifs/random?", "");
    event.preventDefault();
  };

  makeGifCard = elem => {
    return <GifCard key={elem.url} url={elem.images.downsized_large.url} />;
  };

  render() {
    let results =
      this.state.results.length > 0
        ? this.state.results.map(elem => this.makeGifCard(elem))
        : this.results;

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

        <button type="button" onClick={this.handleTrending}>
          Trending
        </button>

        <button type="button" onClick={this.handleRandom}>
          Random
        </button>

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
