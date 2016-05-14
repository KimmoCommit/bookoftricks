import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InfoBoxList from './InfoBoxList';
export default class InfoBox extends Component {
  constructor(props){
    super();
    this.state = {
      isListHidden: true,
    }
  }

  render() {
    return (
      <div className="infobox">
        <div className="infobox-tools">
          <div className="infobox-toggle hidden"> Hide </div>
        </div>
        <div className="infobox-title">
        <div className="infobox-mobile-toggle left" onClick={(ev) => {
          ev.target.classList.toggle('infobox-mobile-toggle-closed')
          this.setState({
            isListHidden: !this.state.isListHidden,
          })
        }}> </div>
          <span className="left">Recent posts</span>
        </div>
        <InfoBoxList isListHidden={this.state.isListHidden} items={this.props.items} ref="infoBoxList"/>
      </div>
    );
  }
}
