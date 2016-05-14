import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
export default class ListItem extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <div className="list-item">
        <div className="list-item-title">
          {this.props.title}
        </div>
        <div className="list-item-details">
          <div className="list-item-date">
            {this.props.date}
          </div>
          <div className="">
            <a href={this.props.url} target="_blank">Open in new window</a>
          </div>
        </div>
        <div className="list-item-body" dangerouslySetInnerHTML={{__html: this.props.content}}>
        </div>
        <div className="list-item-tags">
        {
          this.props.tags.map((current, index) => <span key={index} className="list-item-tag"> current </span>)
        }
        </div>
      </div>
   );
  }
}
 
