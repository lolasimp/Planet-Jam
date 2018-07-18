import React from 'react';
import planetRequests from '../../firebaseRequests/planets';

import './AllPlanets.css';

class AllPlanets extends React.Component {
  state = {
    planets: [],
  }

  componentDidMount() {
    planetRequests
      .getPlanets()
      .then((planets) => {
        this.setState({ planets: planets });
      })
      .catch((err) => {
        console.error('error getting planets', err);
      })
  }
  render() {
    const planetComponents = this.state.planets.map((planet) => {
      return (
        <h2>{planet.name}</h2>
      );
    });
    return (
      <div className="AllPlanets">
        <h1>All Planets</h1>
        <ul className="planets">
          {planetComponents}
        </ul>
      </div>
    );
  }
}

export default AllPlanets;