import React, { Fragment } from 'react';
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
    return { input: '' };
  }

  childInputNameChange = (e) => {
    this.setState({ input: e.target.value });
  }

  updateCurrentChild = (e) => {
    const allChildren = [...this.state.children];
    const childId = e.target.id;
    const selectedChild = allChildren.find(x => x.id === childId);
    delete selectedChild.id;
    selectedChild.name = this.state.input;
    childRequest
      .updateChild(childId, selectedChild)
      .then(() => {
        const id = firebase.auth().currentUser.uid;
        childRequest
          .getChildren(id)
          .then((children) => {
            this.setState({ children });
          })
      })
      .catch((err) => {
        console.error('error not updating', err);
      })
  }

  render() {
    const dashComponents = this.state.children.map((child) => {
      return (
        <Fragment key={child.id}>

          <ChildProfile
            id={child.id}
            details={child}
            deleteChild={this.deleteChildClick}
            onChange={this.childInputNameChange}
            updateCurrentChild={this.updateCurrentChild}
          />
        </Fragment>
      );
    });
    return (
      <div className="Dashboard">
        <button><Link className="child-profile" to="/new/child">Create New Child Profile</Link></button>
        <ul>
          {dashComponents}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
