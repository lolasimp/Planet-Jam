import React from 'react';
import {Link} from 'react-router-dom';

import './Dashboard.css';


class Dashboard extends React.Component {
    render() {
      return (
       <div>
         <button><Link to="/new/child">Go To New</Link></button>
       </div>
      );
    }
  }

export default Dashboard;
