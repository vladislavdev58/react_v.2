import React from "react";
import "./ShowPostsLimit.scss"

const ShowPostsLimit = ({showPostsSet}) => {
  return (
    <div className="showPosts mb-3">
      <span className="mr-4">Загружать по:</span>
      <select name="" id="showPosts__select" className="form-control" defaultValue={'10'} onChange={(event) => showPostsSet(event)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  )
}

export default ShowPostsLimit