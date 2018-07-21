import React from 'react';
import planetRequests from '../../firebaseRequests/planets';
// import myPlanet from '../../firebaseRequests/savedPlanets';

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
      });
  }

  render() {
    // const details = this.props
    const planetComponents = this.state.planets.map((planet) => {
      const imagePath = require(`${planet.imgUrl}.png`);
      return (
        <div>
          <h2>{planet.name}</h2>
          <img src={imagePath} alt={planet.name}/>
        </div>
      );
    });
    return (
      <div className="AllPlanets col-xs-12">
        <h1>All Planets</h1>
        <ul className="planets">
          {planetComponents}
        </ul>
      </div>
    );
  }
}

export default AllPlanets;
