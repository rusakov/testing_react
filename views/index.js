import React, { Component } from "react";
import routes from "../routes/index";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => <Component {...props} {...rest} />}
            />
          ))}
          <Route render={props => <NoMatch {...props} />} />
        </Switch>
      </div>
    );
  }
}
