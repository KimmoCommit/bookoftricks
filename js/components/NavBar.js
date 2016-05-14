import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class NavBar extends Component {
  constructor(props){
    super();
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-links">
          <ul className="left">
            <li><a href="#" className="brand-text navbar-links-link">Book Of Tricks</a></li>
          </ul>
          <ul className="right">
            <li><a className="navbar-links-link" href="http://kimmocommit.github.io/bookoftricks/">Home</a></li>
            <li><a className="navbar-links-link" href="#">About</a></li>
            <li><a className="navbar-links-link" href="http://prose.io/#KimmoCommit/bookoftricks/tree/gh-pages" target="_blank">Prose</a></li>
          </ul>
        </div>
      </div>
   );
  }
}
