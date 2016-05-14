import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Search from './Search';
import InfoBox from './InfoBox';
import NavBar from './NavBar';
import "../../css/main.scss";

export default class App extends Component {
  constructor(props){
    super();
    this.state = {
       posts: props.posts,
    }
  }

  filterItems(filterText){
    if(filterText){
      const filteredPosts = this.props.posts.filter((current) => {
        const words = filterText.split(' ');
        let hasAllWords = true;
        const hasCurrentWord = (filteredWord) => 
        current.postContent
        .toString()
        .toLowerCase()
        .indexOf(filteredWord.toLowerCase()) > -1 ||
        current.postTitle
        .toString()
        .toLowerCase()
        .indexOf(filteredWord.toLowerCase()) > -1;

        for (let i = 0; i < words.length; i++) {
          if(!hasCurrentWord(words[i])){
            hasAllWords = false;
            break;
          }
        }
        return hasAllWords;
        });

      this.setState({
        posts: filteredPosts
      });
    } else {
      this.setState({
        posts: this.props.posts
      });
    }
  }

  render() {
    return (
      <div className="app-container">
      <NavBar />
      {this.props.posts.length > 0 ? [
        <Search key={1} search={this.filterItems.bind(this)} />,
        <List key={2} items={this.state.posts} />,
        <InfoBox key={3} items={this.props.posts} />
        ] : null}
      </div>
    );
  }
}

