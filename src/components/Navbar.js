import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../styles/Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <header className="nav">
        <div className="nav-content">
          <Link to="/" className="nav-logo">Bladiebla</Link>
        </div>
      </header>
    );
  }
}

export default Navbar;
