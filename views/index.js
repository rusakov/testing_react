import React, { Component, Fragment } from "react";

export default class App extends Component {
  componentDidMount() {}
  render() {
    return <div>Hello {this.props.data}</div>;
  }
}
