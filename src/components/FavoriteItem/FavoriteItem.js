import React from 'react'

const FavoriteItem = props => {
  return (
    <div className="media">
      <img src={props.item.thumbnail} className="mr-2" width="64px" height="64px" alt=""/>
      <div className="media-body">
        <h5>{props.item.title}</h5>
      </div>
    </div>
  )
}

export default FavoriteItem;