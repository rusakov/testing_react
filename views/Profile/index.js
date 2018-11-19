import React, { Component, Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { routesProfile } from "./routesProfile";

function splitUrl(url) {
  return url.split('/').filter(part => part)
}

export function mergeAllUrls(...urls) {
  return (
    '/' +
    urls
      .map(splitUrl)
      .reduce((acc, paths) => [...acc, ...paths], [])
      .join('/')
  )
}

export default class Profile extends Component {
  render() {
    const { routes, match } = this.props;    
    return (
      <Fragment>        
        <Link to={mergeAllUrls(match.url, 'albums')}>Альбом</Link>
        <Link to={mergeAllUrls(match.url, 'messages')}>Сообщения</Link>

        <Switch>          
          {routesProfile.map(({ path, exact, render, match, ...rest }) => (            
            <Route key={path} path={path} render={render} exact={exact} />
          ))}
        </Switch>
      </Fragment>
    );
  }
}
