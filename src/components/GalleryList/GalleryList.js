import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

const GalleryList = props => {
  return (
    <div>
      {
        props.arImg.map((link, index) => (
          <GalleryItem
            link={link}
            key={index}
          />
        ))
      }
    </div>
  )
}

export default GalleryList