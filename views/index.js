import React, { Component, Fragment } from "react";
import { routes } from "../routes";
import { Route, Switch, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/">Главная</Link>
        <Link to="/123123123">Профиль</Link>

        <Switch>
          {routes.map(
            ({ path, exact, render, component: Component, ...rest }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={render}
                component={Component}
              />
            )
          )}

          {/* {routes.map(({ path, exact, render }) => (
          <Route key={path} path={path} exact={exact} render={render} />
        ))} */}
        </Switch>
      </Fragment>
      
    );
  }
}
