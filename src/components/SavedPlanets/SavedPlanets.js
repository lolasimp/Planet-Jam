import React from 'react';
import { Link } from 'react-router-dom';
// import planetRequests from '../../firebaseRequests/planets';
import myPlanet from '../../firebaseRequests/savedPlanets';

import './SavedPlanets.css';

class SavedPlanets extends React.Component {
  state = {
    savedPlanets: [],
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    myPlanet
      .getSavedPlanets()
      .then((savedPlanets) => {
        this.setState({  savedPlanets: savedPlanets });
      })
      .catch((err) => {
        console.error('error getting saved planets', err);
      });
  }

  render() {
    // const details = this.props
    const savedPlanetComponents = this.state.pl.map((savedPlanet) => {
      const savedImagePath = require(`${savedPlanet.imgUrl}.png`);
      // const planetSounds = require(`${planet.soundUrl}.mp3`);
      return (
        <div className="planet-container col-xs-4">
          <h2 className="planetName">{savedPlanet.name}</h2>
          <a href="">
            <img className="planet-pic" src={savedImagePath} alt={savedPlanet.name} onClick="saveNewPlanet"/>
          </a>
        {/* <button className="btn btn-success">Save</button> */}
        </div>
      );
    });
    return (
      <div className="savedAugust col-xs-12">
        <h1>Saved Planets</h1>
        <button><Link to="/child/childId/allplanets">See All Planets</Link></button>
        <ul className="savedPlanets">
          {savedPlanetComponents}
        </ul>
      </div>
    );
  }
}

export default SavedPlanets;

