import React from "react";

const GalleryItem = ({link}) => {
  return (
    <React.Fragment>
      <img src={link} width="100%" alt=""/>
    </React.Fragment>
  )
}

export default GalleryItem