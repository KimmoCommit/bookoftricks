import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
export default class ListItem extends Component {
  constructor(props){
    super();
    this.state = {
      hasCodeToCopy: false,
    }
  }
  componentDidMount(){
    const el = ReactDOM.findDOMNode(this.refs.postContent).querySelector('.code-to-copy code');
    if(el){
      /*this.setState({
        hasCodeToCopy: true,
      });*/
      const copyButtonEl = document.createElement('div');
      copyButtonEl.classList.add('copy-code-button');
      copyButtonEl.onclick = () => {
        this.copyCodeToClipBoard()
      };
      copyButtonEl.innerHTML = 'Copy';
      console.log(copyButtonEl);
      ReactDOM.findDOMNode(this.refs.postContent).querySelector('.code-to-copy').appendChild(copyButtonEl);
    }
  }

  copyCodeToClipBoard(){
    const el = ReactDOM.findDOMNode(this.refs.postContent).querySelector('.code-to-copy code');
    if(el){
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(el);
      selection.removeAllRanges();
      selection.addRange(range);
      const successful = document.execCommand('copy');
      if(successful){
        //answer.innerHTML = 'Copied!';
      } else {
        //answer.innerHTML = 'Unable to copy!';
      }
      window.getSelection().removeAllRanges()
    }
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
        <div ref="postContent" className="list-item-body" dangerouslySetInnerHTML={{__html: this.props.content}}>
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
 
