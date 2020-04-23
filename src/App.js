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

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    const users = res.data;

    this.setState({
      loading: false,
      users,
    });
  }

  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
