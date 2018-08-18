import React from 'react';
import PropTypes from 'prop-types';

import {Modal, Button} from 'react-bootstrap';

import save from '../../assets/images/save.png';

import './PlanetKeys.css';

class PlanetKeys extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

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
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Planet Info
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Fun Fact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>MARS</h4>
            <p>
              Mars is the fourth planet from the Sun and last of the terrestrial planets.
              Mars is sometimes called the Red Planet because of the brownish-red color of its surface.
              Mars is the second smallest planet in the solar system behind Mercury.
              The tallest mountain known in the solar system is on Mars. 
              Olympus Mons is a 21 km high and 600 km diameter shield volcano that was formed billions of years ago. 
              Mars experiences huge dust storms – the largest in our solar system. 
              This is due to the elliptical shape of the planet’s orbit path around the Sun.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
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
