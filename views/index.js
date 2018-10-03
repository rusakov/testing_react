import React, { Component, Fragment } from "react";
import Grid from "./grid";

export default class App extends Component {
  render() {
    return (
      <div>
        <Grid data={this.props.data} />
      </div>
    );
  }
}
