import React, {useEffect, useState} from "react";
import GalleryList from "../../components/GalleryList/GalleryList";

const Gallery = props => {

  useEffect(() => {
    createImg();
  }, [])

  const [arImg, setArImg] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const createImg = () => {
    let arImgLocal = []
    for (let prop in props.item) {
      let link = props.item.[prop].s.u;
      link = link.replace(/amp;/g, '')
      arImgLocal.push(link)
    }
    setArImg(arImgLocal)
  }

  return (
    <GalleryList
      arImg={arImg}
      settings={settings}
    />
  )
}

export default Gallery