import React from "react";
import "./ShowPostsLimit.scss"

const ShowPostsLimit = ({showPostsSet}) => {
  return (
    <div className="showPosts mb-3">
      <span className="mr-4">Загружать по:</span>
      <select name="" id="showPosts__select" className="form-control">
        <option onClick={() => showPostsSet(5)}>5</option>
        <option onClick={() => showPostsSet(10)} selected>10</option>
        <option onClick={() => showPostsSet(15)}>15</option>
        <option onClick={() => showPostsSet(20)}>20</option>
      </select>
    </div>
  )
}

export default ShowPostsLimit