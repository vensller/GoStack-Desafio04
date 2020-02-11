import React, { Component} from 'react';

import './Comment.css';

export default class Comment extends Component {
  static defaultProps = {
    data: undefined,
  };

  render() {
    return (
      <>
        {this.props.data &&
          <div>
            <div className="comment">
              <img className="avatar" src={this.props.data.author.avatar}></img>
              <p>
                <strong>{this.props.data.author.name}</strong>
                <span>{this.props.data.content}</span>
              </p>
            </div>            
          </div>
        }
      </>
    );
  }
}