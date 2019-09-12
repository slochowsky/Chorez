import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Chorez<br />
          <small></small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/uncompletedchorez">UnCompletedChorez</Link></li>
            <li><Link className="nav-link" to="/completedchorez">CompletedChorez</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar