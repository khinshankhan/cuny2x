import React from 'react';
import './CitySearch.css';
import Result from './Result';
import axios from 'axios';

export default class CitySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      json: [],
    };

    // bindings go here
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let url = "http://ctp-zip-api.herokuapp.com/city/" + this.state.value.toUpperCase();
    axios.get(url)
      .then((response) => {
        this.setState({json: response.data});
      })
      .catch((error) => {
        this.setState({json: []});
      });
      event.preventDefault();
  }

  render() {
    
    var results = this.state.json.map((elem) =>
      <Result ZipCode={elem}/>
    );

    return (
      <div id="app">
        <div id="header">
          <h1>City Search</h1>
        </div>
        <div id="body">
          <form onSubmit={this.handleSubmit}>
            <label>City: </label>
            <input type="text" placeholder="Springfield" value={this.state.value} onChange={this.handleChange}/>
          </form>
          <div id="results">

            {this.state.json.length > 0 ? <div className="results">{results}</div> : <div>No results</div>}
            
          </div>
        </div>
      </div>
    );
  }
}

