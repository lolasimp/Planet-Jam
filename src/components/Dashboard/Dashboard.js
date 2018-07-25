import React from 'react';
import { Link } from 'react-router-dom';
import ChildProfile from '../../components/ChildProfile/ChildProfile';
import firebase from 'firebase';
import childRequest from '../../firebaseRequests/children';

import auth from '../../firebaseRequests/auth';

import './Dashboard.css';


class Dashboard extends React.Component {
  state = {
    children: [],
  }
  componentDidMount() {
    const id = firebase.auth().currentUser.uid;
    childRequest
      .getChildren(id)
      .then((children) => {
        this.setState({ children });
      })
      .catch((err) => {
        console.error('error with getting my children', err);
      });
  }


  deleteChildClick = (e) => {
    const childId = e.target.id;
    childRequest
      .deleteRequest(childId)
      .then(() => {
        childRequest
          .getChildren()
          .then((children) => {
            this.setState({ children });
          })
      })
      .catch(((err) => {
        console.error('error with get delete request', err);
      }));
  }

 getStringInit = () => {
   return {input: ''};
 }

childInputNameChange = (e) => {
  this.setState({input: e.target.value});
}

updateCurrentChild = (e) => {
  const firebaseId = e.target.id;
  const updatedChild = {
    name: this.state.input,
    avatarUrl: e.target.avatarUrl,
    parentUid: auth.getUid(),
  }
  console.log(updatedChild);
  childRequest
    .updateChild(firebaseId, updatedChild)
    .then(() => {
      console.log('success');
    })
    .catch((err) => {
      console.error('error not updating', err);
    })
}

  render() {
    const dashComponents = this.state.children.map((child) => {
      return (
        <ChildProfile
          key={child.id}
          details={child}
          deleteChild={this.deleteChildClick}
          onChange={this.childInputNameChange}
          updateCurrentChild={this.updateCurrentChild}
        />
      );
    });
    return (
      <div>
        <ul>
          {dashComponents}
        </ul>
        <button><Link to="/new/child">Create New Child Profile</Link></button>
      </div>
    );
  }
}

export default Dashboard;
