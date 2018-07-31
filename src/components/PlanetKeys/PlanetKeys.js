import React from 'react';

import './PlanetKeys.css';

class PlanetKeys extends React.Component {

  state = {
    isPlayed:false,
  }

  saveOrder= () => {
    this.props.saveNewOrder();
  }

  saveNewPlanetEvent = () => {
    this.props.addToMyPlanets(this.props.details);
  }

  playSoundEvent = (e) => {
    if(this.state.isPlayed === false){
    document.querySelector(`audio.${e.target.id}`).play();
    this.setState({isPlayed: true})
    }else {
      this.setState({isPlayed: false})
    document.querySelector(`audio.${e.target.id}`).pause();
    }
    console.log(e.target.id);
  }

  render() {
    const {details} = this.props;
    const imagePath = require(`./images/${details.imgUrl}`);
    const sounds = require(`./sounds/${details.soundUrl}`);

    return (
      <li>
      <div className="planet-container col-xs-4">
        <h2 className="planetName">{details.name}</h2>
       <img className="planet-pic" src={imagePath} alt={details.name} onClick={this.playSoundEvent} id={details.id}/>
       <audio className={details.id}>
       <source src={sounds}/>
       </audio>
       <button className="btn btn-success" onClick={this.saveNewPlanetEvent}>Save My Planet</button>
      </div>
      </li>
    );
  };
}

export default PlanetKeys;
