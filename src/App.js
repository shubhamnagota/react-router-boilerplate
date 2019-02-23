import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import LoginPage from "./components/Pages/LoginPage";
import DashboardPage from "./components/Pages/DashboardPage";
import NotFoundPage from "./components/Pages/NotFoundPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {/* Routes for the application */}
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
