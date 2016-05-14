import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';

export default class List extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <div className="list">
        {this.props.items.map((current, index) =>
          <ListItem 
            key={index}
            title={current.postTitle}
            content={current.postContent}
            date={current.postDate}
            url={current.postUrl}
            tags={current.postTags ? current.postTags.split(' ') : []}
          />
        )}
      </div>
    );
  }
}
