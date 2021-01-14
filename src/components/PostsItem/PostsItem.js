import React from 'react'

const PostsItem = props => {
  // Сокращение обращения
  const data = props.item.data

  return (
    <div className="col-12 col-md-6 mb-4">
      <div className="card posts">
        <div className="posts__img">
          <img className="card-img-top" src={data.url} width="256px" height="auto" alt=""/>
        </div>
        <div className="card-body">
          <h5 className="card-title posts__title">{data.title}</h5>
          <a href={`https://www.reddit.com${data.permalink}`} className="btn btn-primary">Open post</a>
          <button className="btn btn-danger ml-2">Add favorite</button>
        </div>
      </div>
    </div>
  )
}

export default PostsItem;