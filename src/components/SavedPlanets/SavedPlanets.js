import React from 'react';
import { Link } from 'react-router-dom';
import myPlanet from '../../firebaseRequests/savedPlanets';
import allPlanets from '../../firebaseRequests/planets';

import './SavedPlanets.css';

class SavedPlanets extends React.Component {
  state = {
    savedPlanets: [],
    planets: [],
  }

  componentDidMount() {
    this.populatePlanets();
  }

  populatePlanets = () => {
    const childId = this.props.match.params.childId;
    myPlanet
      .getSavedPlanets(childId)
      .then((savedPlanets) => {
        this.setState({ savedPlanets });
      })
      .catch((err) => {
        console.error('error getting saved planets', err);
      });
    allPlanets.getPlanets()
      .then((planets) => {
        this.setState({ planets });
      })
      .catch((err) => {
        console.error('error getting planets', err);
      });
  }

  deletePlanetClick = (e) => {
    const firebaseId = e.target.id;
    myPlanet
      .deletePlanet(firebaseId)
      .then(() => {
        this.populatePlanets();
      })
      .catch(((err) => {
        console.error('error not deleting planet', err);
      }));
  }

  render() {
    const childId = this.props.match.params.childId;
    const { savedPlanets, planets } = this.state;
    const savedPlanetComponents = savedPlanets.map((savedPlanet) => {
      const selectedPlanet = planets.find(x => x.id === savedPlanet.planetId);
      if (selectedPlanet) {
        const savedImagePath = require(`../../assets/images/${selectedPlanet.imgUrl}`);
        // const planetSounds = require(`./PlanetKeys/sounds/${selectedPlanet.soundUrl}`);
        return (
          <div className="planet-container col-xs-4" key={savedPlanet.id}>
            <h2 className="planetName">{selectedPlanet.name}</h2>
            <a href="">
              <img className="planet-pic" src={savedImagePath} alt={selectedPlanet.name} />
            </a>
            <button className="btn btn-danger" id={savedPlanet.id} onClick={this.deletePlanetClick}>Delete Me</button>
          </div>
        );
      }
      return '';
    });
    // }

    return (
      <div className="savedAugust col-xs-12">
        <h1>Saved Planets</h1>
        <button><Link to={`/child/${childId}/allplanets`}>See All Planets</Link></button>
        <ul className="savedPlanets">
          {savedPlanetComponents}
        </ul>
      </div>
    );
  }
}

export default SavedPlanets;
