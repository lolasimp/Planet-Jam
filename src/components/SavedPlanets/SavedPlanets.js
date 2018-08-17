import React from 'react';
import { Link } from 'react-router-dom';
import myPlanet from '../../firebaseRequests/savedPlanets';
import allPlanets from '../../firebaseRequests/planets';

import deleteThis from '../../assets/images/delete.png';

import './SavedPlanets.css';

class SavedPlanets extends React.Component {
  state = {
    savedPlanets: [],
    planets: [],
    isPlayed: false,
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

  playSavedSoundEvent = (e) => {
    if(this.state.isPlayed === false){
      document.querySelector(`audio.${e.target.id}`).play();
      this.setState({isPlayed: true})
    }else {
      this.setState({isPlayed: false})
    document.querySelector(`audio.${e.target.id}`).pause();
    }
  }


  render() {
    const childId = this.props.match.params.childId;
    const { savedPlanets, planets } = this.state;
    const savedPlanetComponents = savedPlanets.map((savedPlanet) => {
      const selectedPlanet = planets.find(x => x.id === savedPlanet.planetId);
      if (selectedPlanet) {
        const savedImagePath = require(`../../assets/images/${selectedPlanet.imgUrl}`);
        const planetSounds = require(`../../assets/sounds/${selectedPlanet.soundUrl}`);

        return (
          <div className="planet-container col-xs-4" key={savedPlanet.id}>
            <h2 className="planetName">{selectedPlanet.name}</h2>
            <img className="planet-pic" src={savedImagePath} alt={selectedPlanet.name} onClick={this.playSavedSoundEvent} id={savedPlanet.id}/>
       <audio className={savedPlanet.id}>
       <source src={planetSounds}/>
       </audio>
            {/* <button className="btn btn-danger" id={savedPlanet.id} onClick={this.deletePlanetClick}>Delete Me</button> */}
            <img src={deleteThis} alt={savedPlanet.name} id={savedPlanet.id} onClick={this.deletePlanetClick}/>
          </div>
        );
      }
      return '';
    });
    // }

    return (
      <div className="SavedPlanets">
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
