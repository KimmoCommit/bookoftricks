import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InfoBoxListItem from './InfoBoxListItem';
import InfoBoxListItemTitle from './InfoBoxListItemTitle';

export default class InfoBoxList extends Component {
  constructor(props){
    super();
  }

  sortByMonth(posts){
    const resultObj = {};
    const resultArray = [];
    for (let i = 0; i < posts.length; i++) {
      const date = posts[i].postDate.split(' ')[0]
      const month = date.split('-')[1];
      const year = date.split('-')[0];
      const newKey = `${year}.${month}`;
      if(resultObj[newKey]){
        resultObj[newKey].push(posts[i]);
      } else {
        resultObj[newKey] = [posts[i]];
      }
    }

    for(const key in resultObj){
      if(resultObj[key]){
        const titleText = key.split('.');
        resultArray.push(
            <InfoBoxListItemTitle key={key} text={`${titleText[1]}/${titleText[0]}`}/>
          );
        for (let a = 0; a < resultObj[key].length; a++) {
          resultArray.push(
            <InfoBoxListItem key={`infobox-list-item-${key}${a}`}
            url={resultObj[key][a].postUrl}
            text={resultObj[key][a].postTitle}
            tooltipContent={resultObj[key][a].postContent}
            />);
        }
      }
    }
    return resultArray;
  }

  render() {
    return (
      <div className="infobox-list">
      { this.sortByMonth(this.props.items) }
      </div>
    );
  }
}

