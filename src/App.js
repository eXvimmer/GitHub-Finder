import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/Layout/Navbar/Navbar";
import Search from "./components/Users/Search";
import Users from "./components/Users/Users";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  searchUsers = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    const users = res.data.items;

    this.setState({
      loading: false,
      users,
    });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={!!users.length}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
