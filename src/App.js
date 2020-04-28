import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import Navbar from "./components/Layout/Navbar/Navbar";
import Alert from "./components/Layout/Alert";
import User from "./components/Users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
