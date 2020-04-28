import React, { useState, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Navbar from "./components/Layout/Navbar/Navbar";
import Search from "./components/Users/Search";
import Alert from "./components/Layout/Alert";
import Users from "./components/Users/Users";
import User from "./components/Users/User";
import GithubState from "./context/github/GithubState";
import "./App.css";

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
