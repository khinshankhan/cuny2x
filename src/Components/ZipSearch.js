import React from 'react';
import './ZipSearch.css';
import Result from './Result';
import axios from 'axios';

export default class ZipSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      json: 'this state json',
    };

    // bindings go here
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log("submitted")
    let url = "http://ctp-zip-api.herokuapp.com/zip/" + this.state.value;
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        this.setState({json: response.data});
        //console.log(this.state.json);
      },
      (error) => {
        console.log(error);
      })
    event.preventDefault();
  }

  render() {
    return (
      <div id="app">
        <div id="header">
          <h1>Zip Code Search</h1>
        </div>
        <div id="body">
          <form onSubmit={this.handleSubmit}>
            <label>Zip Code: </label>
            <input type="text" placeholder="10016" value={this.state.value} onChange={this.handleChange}/>
          </form>
          <div id="results">
            No results
            <Result/>
            <Result/>
            <Result/>
          </div>
        </div>
      </div>
    );
  }
}

