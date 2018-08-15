import React from 'react';
import PropTypes from 'prop-types';

import save from '../../assets/images/save.png';

import './PlanetKeys.css';

class PlanetKeys extends React.Component {
  static propTypes = {
    details: PropTypes.object.isRequired,
  }

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
  }

  render() {
    const {details} = this.props;
    const imagePath = require(`../../assets/images/${details.imgUrl}`);
    const sounds = require(`../../assets/sounds/${details.soundUrl}`);

    return (
      <li>
      <div className="planet-container col-xs-4">
        <h2 className="planetName">{details.name}</h2>
        <div className="img__wrap">
       <img className="planet-pic" src={imagePath} alt={details.name} onClick={this.playSoundEvent} id={details.id}/>
       <p className="img__description">This image looks super neat.</p>
       </div>
       <audio className={details.id}>
       <source src={sounds}/>
       </audio>
       <img className="row saveButton" src={save} alt={details.name} id={details.id} onClick={this.saveNewPlanetEvent}/>
      </div>
      </li>
    );
  };
}

export default PlanetKeys;
