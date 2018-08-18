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
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Planet Info</button>

<div className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
  <div className="modal-dialog modal-sm" role="document">
    <div className="modal-content">
    <h2>Hello</h2>
    </div>
  </div>
</div>
        <div className=" img__wrap">
       <img className="planet-pic" src={imagePath} alt={details.name} onClick={this.playSoundEvent} id={details.id}/>
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
