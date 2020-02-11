import React, { Component } from 'react';

import Comment from '../Comment/Comment';

import './PostItem.css';

export default class PostItem extends Component {
  static defaultProps = {
    data: undefined,
  };
 
  render() {    
    return (
      <>
        {this.props.data &&
          <div className="post-item">
            <div className="post-header" >
              <img className="avatar" src={this.props.data.author.avatar} />
              <div className="details">
                <span>{this.props.data.author.name}</span>
                <span>{this.props.data.date}</span>
              </div>                                                           
            </div>
            <p className="post-data">
              {this.props.data.content}
            </p>
            <div className="divider" />
            <div>
              {this.props.data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
            </div>
          </div>
        }
      </>
    );
  }
}