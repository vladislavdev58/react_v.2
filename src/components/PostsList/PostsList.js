import React from 'react'
import PostsItem from "../PostsItem/PostsItem"

const PostsList = props => {
  if (props.error) {
    return <div>Ошибка: {props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {props.arPosts.map((item, index) => (
            <PostsItem
              key={index}
              item={item}
              funcTest={props.funcTest}
            />
          ))}
      </ul>
    );
  }
}

export default PostsList;