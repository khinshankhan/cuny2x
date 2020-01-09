import React from 'react';

class ZipSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // bindings go here
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {

  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default ZipSearch;
