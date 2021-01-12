import React from 'react'
import PostsItem from "../PostsItem/PostsItem"

const PostsList = props => (
  if (loading){
  <ul>
    { props.arPosts.map((item, index) => {
      return (
        <PostsItem
          key={index}
          item={item}
          funcTest={props.funcTest}
        />
      )
    }) }
  </ul>
)
}

export default PostsList;