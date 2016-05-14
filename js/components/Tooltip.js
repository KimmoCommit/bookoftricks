import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Tooltip extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
        <div className="tooltip">
          <div className="tooltip-content">
            {this.props.children}
          </div>
          <div className="tooltip-arrow"></div>
        </div>
      );
  }
}
