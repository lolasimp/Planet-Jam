import React from 'react';

import authRequest from '../../firebaseRequests/auth';
import childrenRequest from '../../firebaseRequests/children';

import './New.css';
import boy1 from './avatar/boy1.jpeg';
import boy2 from './avatar/boy2.jpeg';
import girl1 from './avatar/girl1.jpeg';
import girl2 from './avatar/girl2.jpg';

class New extends React.Component {
  state = {
    newChild: {
      name: "",
      avatarUrl: "",
      parentUid: "",
    }
  }
  nameInput = (e) => {
    const newChild = {...this.state.newChild};
    newChild.name = e.target.value;
    this.setState({ newChild });
  }

  chooseAvatar = (e) => {
    const newChild = {...this.state.newChild};
    newChild.avatarUrl = e.target.value;
    this.setState({ newChild });
  }
  postChild = () => {
    const newChild = {...this.state.newChild};
    newChild.parentUid = authRequest.getUid();
    childrenRequest.postChild( newChild)
    .then(()=> {
      this.props.history.push("/dashboard");
    })
    .catch ((err) =>{
      console.error('no new Child', err);
    })
  }

  render () {
    return (
      <div className="New">
        <input onChange={this.nameInput}type="text" />
          <input onChange={this.chooseAvatar} type="radio" value="boy1.jpeg" name="Avatar" />
          <img src={boy1} alt="" />
          <input onChange={this.chooseAvatar} type="radio" value="boy2.jpeg" name="Avatar" />
          <img src={boy2} alt="" />
          <input onChange={this.chooseAvatar} type="radio" value="girl1.jpeg" name="Avatar" />
          <img src={girl1} alt="" />
          <input onChange={this.chooseAvatar} type="radio" value="girl2.jpg" name="Avatar" />
          <img src={girl2} alt="" />
          <button className="saveMe btn btn-success " onClick={this.postChild}>Save</button>
        </div>

    );
  }
}

export default New;
