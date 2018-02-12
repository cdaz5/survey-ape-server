import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Dash</h1>
      <div class="fixed-action-btn">
        <Link
          to='/surveys/new'
          className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
