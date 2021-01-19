import React from 'react'

const FavoriteItem = props => {
  return (
    <div className="media mb-3">
      <img src={props.item.thumbnail} className="mr-2" width="64px" height="64px" alt="" loading="lazy"/>
      <div className="media-body">
        <a href={`https://www.reddit.com${props.item.permalink}`} target="_blank" rel="noreferrer" className="favorite__title">{props.item.title}</a>
      </div>
      <button className="btn btn-danger" onClick={() => props.removeFavoriteItem(props.item.name)}>&times;</button>
    </div>
  )
}

export default FavoriteItem;