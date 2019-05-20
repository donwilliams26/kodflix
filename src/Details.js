import React from "react";
import { Link } from "react-router-dom";
import getTechnologies from "./technologies-get";

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
    return (
      <div>
        <h1>{this.state.technology.name}</h1>
        <Link to="/">Back to Home page</Link>
      </div>
    );
  }
}

//  export default function Details() {
//   return (
//     <div>
//       <h1>Welcome to the details page, WIP:) </h1>
//       <Link to="/">Back to Home page</Link>
//     </div>
//   );
// }
