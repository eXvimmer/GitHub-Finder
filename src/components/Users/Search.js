import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

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
    if (!this.state.text.length) return;
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
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
