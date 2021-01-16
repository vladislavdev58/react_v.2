import React from 'react'
import PostsMedia from "../PostsMedia/PostsMedia"

const PostsItem = props => {
  const item = props.item
  return (
    <div className="col-12 col-md-6 mb-4">
      <div className="card posts">
        <PostsMedia
          item={item}
        />
        {/*<div className="posts__video"></div>*/}
        {/*<div className="posts__img">*/}
        {/*  <img className="card-img-top" src={data.url} width="256px" height="auto" alt=""/>*/}
        {/*</div>*/}
        <div className="card-body">
          <h5 className="card-title posts__title">{item.title}</h5>
          <a href={`https://www.reddit.com${item.permalink}`} className="btn btn-primary">Open post</a>
          <button className="btn btn-danger ml-2">Add favorite</button>
        </div>
      </div>
    </div>
  )
}

export default PostsItem;