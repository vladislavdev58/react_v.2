import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const GalleryList = props => {
  return (
    <Carousel
      showThumbs={false}
    >
      {
        props.arImg.map((link, index) => (
          <GalleryItem
            link={link}
            key={index}
          />
        ))
      }
    </Carousel>
  )
}

export default GalleryList