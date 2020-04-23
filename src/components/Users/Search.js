import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="form">
          <input
            onChange={this.onInputChange}
            type="text"
            name="text"
            value={this.state.text}
            placeholder="Search Users..."
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
