import React, { Component } from 'react';

import PostItem from '../PostItem/PostItem';

import './PostList.css';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Teste usuário",
          avatar: "https://pngimage.net/wp-content/uploads/2018/06/profile-png-icon-2.png"
        },
        date: "11 fev 2020",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Ivens Diego Müller",
          avatar: "https://avatars2.githubusercontent.com/u/22751959?s=460&v=4"
        },
        date: "10 fev 2020",
        content: "Pessoal, a Rockeseat é demais!",
        comments: [
          {
            id: 2,
            author: {
              name: "Felipe Deschamps",
              avatar: "https://avatars3.githubusercontent.com/u/4248081?s=460&v=4"
            },
            content: "Com certeza!"
          },
          {
            id: 3,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content: "Cras facilisis diam vel nisi porttitor ornare. Proin sed efficitur enim. Sed congue orci eu mauris consequat euismod. Cras ornare ex sed maximus rutrum. Quisque suscipit volutpat ornare. Suspendisse urna ipsum, pharetra id velit sed, auctor efficitur erat. Nam vulputate ligula in maximus lacinia. Etiam vehicula augue et mauris pulvinar consectetur. Donec vitae aliquet enim. Integer ante eros, vestibulum ac porta et, posuere ut lectus. Sed fringilla est pharetra massa suscipit tincidunt."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <>
        <div className="postList">
          {this.state.posts.map(post => <PostItem key={post.id} data={post} />)}
        </div>
      </>
    );
  }
}