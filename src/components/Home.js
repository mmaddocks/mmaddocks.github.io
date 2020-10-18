import React from 'react';
import { Link } from 'react-router-dom';

// UI
import '../App.css';

class Home extends React.Component {

  render() {
    return (
      <div className="home  page">
        <Link to="/about">Go to About</Link>
      </div>
    );
  }
}

export default Home;
