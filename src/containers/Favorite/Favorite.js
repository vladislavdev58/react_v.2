import React, {useEffect, useState} from 'react'
import FavoriteList from "../../components/FavoriteList/FavoriteList"
import './Favorite.scss'

const Favorite = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [arFavorite, setArFavorite] = useState([])

  useEffect(() => {
    showLocalFavorite();
  }, [])

  const showLocalFavorite = () => {
    const localFavorite = JSON.parse(localStorage.getItem('arFavoriteId'));
    loadingFavoriteAPI(localFavorite);
  }

  const loadingFavoriteAPI = (str) => {
    fetch(`https://www.reddit.com/api/info.json?id=${str}`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.data.children.length !== 0) {
            // Объединяем массивы
            setArFavorite([...arFavorite, ...result.data.children])
            setIsLoaded(true)
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error)
        }
      )
  }

  return (
    <div className="favorite">
      <h2 className="favorite__title">Favorite</h2>
      <FavoriteList
        error={error}
        isLoaded={isLoaded}
        arFavorite={arFavorite}
      />
    </div>
  )
}

export default Favorite;