import React, {useState} from 'react'
import FavoriteList from "../../components/FavoriteList/FavoriteList"
import './Favorite.scss'

const Favorite = () => {

  return (
    <div className="favorite">
      <h2 className="favorite__title">Favorite</h2>
      <FavoriteList />
    </div>
  )
}

export default Favorite;