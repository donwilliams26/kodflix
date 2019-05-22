import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import getTechnologies from "../technologies-get";
import "./Details.css";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      technology: {}
    };
  }

  componentDidMount() {
    let technologyId = this.props.match.params.technologyId;
    let technology = getTechnologies().find(
      technology => technology.id === technologyId
    );
    this.setState({ technology });
  }

  render() {
    if (this.state.technology === undefined) {
      return <Redirect to="/not-found" />;
    } else {
      return (
        <div className="Details">
          <h1>{this.state.technology.name}</h1>
          <div className="container">
            <div>{this.state.technology.details}</div>
            <img
              src={this.state.technology.logo}
              alt={this.state.technology.name}
            />
          </div>
          <Link to="/">Back to Home page</Link>
        </div>
      );
    }
  }
}
