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
        <div className="card-body">
          <h5 className="card-title posts__title">{item.title}</h5>
          <a href={`https://www.reddit.com${item.permalink}`} className="btn btn-primary">Open post</a>
          <button className="btn btn-danger mt-2 mt-lg-0 ml-lg-2" onClick={() => props.addFavorite(item.name)}>Add favorite</button>
        </div>
      </div>
    </div>
  )
}

export default PostsItem;