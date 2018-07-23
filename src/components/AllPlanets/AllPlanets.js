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
      // const planetSounds = require(`${planet.soundUrl}.mp3`);
      return (
        <div className="planet-container col-xs-4">
          <h2 className="planetName">{planet.name}</h2>
          <a href="">
            <img className="planet-pic" src={imagePath} alt={planet.name} onClick="saveNewPlanet"/>
          </a>
        {/* <button className="btn btn-success">Save</button> */}
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
