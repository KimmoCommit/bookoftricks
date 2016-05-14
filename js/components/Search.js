import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Search extends Component {
  constructor(props){
    super();
  }

  componentDidMount(){
    let pressedKeys = [];
    document.addEventListener('keydown', (ev) => {
      pressedKeys.push(ev.keyCode);
      const el = ReactDOM.findDOMNode(this.refs.searchInput);
      if(pressedKeys.length === 2){
        switch(true){
          case pressedKeys[0] === 17 && pressedKeys[1] === 88:
          el.value = '';
          el.focus();
            break;
          default:
            break;
        }
      } else if(pressedKeys.length > 2) {
        pressedKeys = [];
      }
    }, false);
    document.addEventListener('keyup', (ev) => {
      pressedKeys = [];
    }, false);
  }

  render() {
    return (
      <div className="search">
        <input
        ref="searchInput"
        className="search-input"
        type="text"
        placeholder="Search.."
        autoFocus
        onKeyUp={(ev) => this.props.search(ev.target.value)}
        />
      </div>
      );
  }
}

