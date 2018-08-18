import React from 'react';

import authRequest from '../../firebaseRequests/auth';
import childrenRequest from '../../firebaseRequests/children';

import './New.css';
import boy1 from '../../assets/avatar/boy1.png';
import boy2 from '../../assets/avatar/boy2.png';
import boy3 from '../../assets/avatar/boy3.png';
import girl1 from '../../assets/avatar/girl1.png';
import girl2 from '../../assets/avatar/girl2.png';
import select from '../../assets/images/click-here.png';
import saveArrow from '../../assets/images/save-btn.png';


class New extends React.Component {
  state = {
    newChild: {
      name: "",
      avatarUrl: "",
      parentUid: "",
    }
  }
  nameInput = (e) => {
    const newChild = { ...this.state.newChild };
    newChild.name = e.target.value;
    this.setState({ newChild });
  }

  chooseAvatar = (e) => {
    const newChild = { ...this.state.newChild };
    newChild.avatarUrl = e.target.value;
    this.setState({ newChild });
  }
  postChild = () => {
    const newChild = { ...this.state.newChild };
    newChild.parentUid = authRequest.getUid();
    childrenRequest.postChild(newChild)
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.error('no new Child', err);
      })
  }

  render() {
    return (
      <div className="New col-md-12 text-center">
        <h1 className="avatar-title">Choose Your Avatar</h1>
        <div className="row">
          <div className="child-ava col-md-2 ">
            <img className="arrow" src={select} alt="" />
            <input onChange={this.chooseAvatar} type="radio" value="boy1.png" name="Avatar" />
            <img className="child-pic" src={boy1} alt="" />
          </div>
          <div className="child-ava col-md-2">
            <img className="arrow" src={select} alt="" />
            <input onChange={this.chooseAvatar} type="radio" value="boy2.png" name="Avatar" />
            <img className="child-pic" src={boy2} alt="" />
          </div>
          <div className="child-ava col-md-2">
            <img className="arrow" src={select} alt="" />
            <input onChange={this.chooseAvatar} type="radio" value="boy3.png" name="Avatar" />
            <img className="child-pic" src={boy3} alt="" />
          </div>
          <div className="child-ava col-md-2">
            <img className="arrow" src={select} alt="" />
            <input onChange={this.chooseAvatar} type="radio" value="girl1.png" name="Avatar" />
            <img className="child-pic" src={girl1} alt="" />
          </div>
          <div className="child-ava col-md-2">
            <img className="arrow" src={select} alt="" />
            <input onChange={this.chooseAvatar} type="radio" value="girl2.png" name="Avatar" />
            <img className="child-pic" src={girl2} alt="" />
          </div>
          <h3 className="avatar-title">Add Name Here</h3>
          <input className="text-box" onChange={this.nameInput} type="text" placeholder="Enter Name Here" />
        </div>
        <img className="arrows col-md-12" src={saveArrow} alt="" />
        <button className="saveMe btn btn-success col-xs-6 col-md-4" onClick={this.postChild}>Save</button>
      </div>
    );
  }
}

export default New;
