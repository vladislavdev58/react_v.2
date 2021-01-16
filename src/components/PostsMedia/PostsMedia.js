import React from "react"
import Gallery from "../../containers/Gallery/Gallery";

const PostsMedia = props => {
  const item = props.item
  return (
    <React.Fragment>
      {
        item.is_video
          ? <video src={item.media.reddit_video.fallback_url} preload="auto" autoPlay loop width="100%"></video>
          : item.is_gallery ?? item.hasOwnProperty('is_gallery')
          ? <Gallery
              item={item.media_metadata}
            />
          : <img className="card-img-top" src={item.url} alt=""/>
      }
    </React.Fragment>
  )
}

export default PostsMedia