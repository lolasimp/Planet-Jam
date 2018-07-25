import React from 'react';
import { Link } from 'react-router-dom';
import ChildProfile from '../../components/ChildProfile/ChildProfile';
import firebase from 'firebase';
import childRequest from '../../firebaseRequests/children';

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
  render() {
    const dashComponents = this.state.children.map((child) => {
      return (
        <ChildProfile
          key={child.id}
          details={child}
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
