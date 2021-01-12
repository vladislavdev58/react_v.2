import React from 'react'

const PostsItem = props => {
  return (
    <li onClick={() => props.funcTest(props.item.data.id)}>
      {props.item.data.title}
    </li>
  )
}

export default PostsItem;