import React, {useEffect, useState} from 'react'
import FavoriteList from "../../components/FavoriteList/FavoriteList"
import './Favorite.scss'

const Favorite = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [arFavorite, setArFavorite] = useState([])
  const [emptyArray, setEmptyArray] = useState(true)

  useEffect(() => {
    showLocalFavorite();
  }, [])

  const showLocalFavorite = () => {
    const localFavorite = JSON.parse(localStorage.getItem('arFavoriteId'));
    console.log(localFavorite)
    if (localFavorite !== null && localFavorite.length !== 0){
      setEmptyArray(false)
      loadingFavoriteAPI(localFavorite);
    }
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

  const removeFavoriteItem = id => {
    // Получаем
    const localFavorite = JSON.parse(localStorage.getItem('arFavoriteId'));
    // Получаем индекс
    const indexAr = localFavorite.indexOf(id);
    // Удаляем
    localFavorite.splice(indexAr, 1);
    // Перезаписываем
    localStorage.setItem('arFavoriteId', JSON.stringify(localFavorite));
    // Фильтруем и отображаем
    setArFavorite(arFavorite.filter(item => item.data.name !== id))
    // Проверяем пустой или нет
    if (localFavorite.length === 0){
      setEmptyArray(true)
    }
  }

  return (
    <div className="favorite bg-light pt-3 px-2">
      <h2 className="favorite__title text-center text-uppercase mb-4">Favorite</h2>
      <FavoriteList
        error={error}
        isLoaded={isLoaded}
        arFavorite={arFavorite}
        emptyArray={emptyArray}
        removeFavoriteItem={removeFavoriteItem}
      />
    </div>
  )
}

export default Favorite;