import React from 'react';
import dashboardRequests from '../../firebaseRequests/children';

import './Dashboard.css';

class Dashboard extends React.Component {
  state = {
    children: [],
  }

  componentDidMount() {
    dashboardRequests
      .getChildren()
      .then((children) => {
        this.setState({ children: children });
      })
      .catch((err) => {
        console.error('error getting children', err);
      })
  }
  render() {
    const dashComponents = this.state.children.map((dash) => {
      return (
        <h2>{dash.name}</h2>
      
      );
    });
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <ul className="children">
          {dashComponents}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
