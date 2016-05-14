import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InfoBoxList from './InfoBoxList';
export default class InfoBox extends Component {
  constructor(props){
    super();
  }

  render() {
    return (
      <div className="infobox">
        <div className="infobox-tools">
          <div className="infobox-toggle hidden"> Hide </div>
        </div>
        <div className="infobox-title">Recent posts</div>
        <InfoBoxList items={this.props.items} />
      </div>
    );
  }
}
