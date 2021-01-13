import React from 'react'

const PostsItem = props => {
  return (
    <li>
      {props.item.data.title}
    </li>
  )
}

export default PostsItem;