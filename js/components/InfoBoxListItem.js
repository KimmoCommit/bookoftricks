import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip';

export default class InfoBoxListItem extends Component {
  constructor(props){
    super();
    this.state = {
      isHovered: false,
    }
  }
  render() {
    return (
      <li className="infobox-list-item"
      onMouseOver={() => {
        this.setState({
          isHovered: true,
        });
      }}
      onMouseLeave={() => {
        this.setState({
          isHovered: false,
        });
      }}>
        {this.state.isHovered && this.props.tooltipContent ?
          <Tooltip>
            <div dangerouslySetInnerHTML={{__html: this.props.tooltipContent}}></div>
          </Tooltip> : 
          null
        }
        <a href={this.props.url} target="_blank">{this.props.text}</a>
      </li>
    );
  }
}
