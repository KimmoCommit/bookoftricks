import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class InfoBoxListItem extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <li className="infobox-list-title">{this.props.text}</li>
    );
  }
}
