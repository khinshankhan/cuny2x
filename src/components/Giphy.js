import React from "react";
import axios from "axios";

import GifCard from "./GifCard";

export default class Giphy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: [],
      rating: "G",
    };
  }

  handleChangeQuery = event => {
    this.setState({ query: event.target.value });
  };

  apiCall = (urlBeginning, query) => {
    let url =
      urlBeginning + query + "&rating=" + this.state.rating + "&api_key=kCdfDRHFr9wSutGKEqJo9mqx3hBndt91";

      console.log(url);

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

    console.log(this.state.rating);
    
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

  /*
  handleFunny = event => {
    this.apiCall("http://api.giphy.com/v1/gifs/search?q=", "funny");
    event.preventDefault();
  }
  handleFood = event => {
    this.apiCall("http://api.giphy.com/v1/gifs/search?q=", "food");
    event.preventDefault();
  }
  handleFashion = event => {
    this.apiCall("http://api.giphy.com/v1/gifs/search?q=", "fashion");
    event.preventDefault();
  }
  handleTechnology = event => {
    this.apiCall("http://api.giphy.com/v1/gifs/search?q=", "technology");
    event.preventDefault();
  }
  */


  handleChangeRating = event => {
    this.setState({rating: event.target.value});
  }


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
          <label>Search: </label>
          <input
            type="text"
            placeholder="Enter search terms"
            value={this.state.value}
            onChange={this.handleChangeQuery}
          />
        </form>


        <label>
          Rating:
          <select value={this.state.rating} onChange={this.handleChangeRating}>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
          </select>
        </label>


        <button type="button" onClick={this.handleTrending}>
          Trending
        </button>
        <button type="button" onClick={this.handleRandom}>
          Random
        </button>

        {/*
        <button type="button" onClick={this.handleFunny}>
          Funny
        </button>
        <button type="button" onClick={this.handleFood}>
          Food
        </button>
        <button type="button" onClick={this.handleFashion}>
          Fashion
        </button>
        <button type="button" onClick={this.handleTechnology}>
          Technology
        </button>
        */}

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
