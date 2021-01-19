import React, {useState, useEffect} from 'react'
import PostsList from '../../components/PostsList/PostsList'
import './Posts.scss'

const Posts = ({loadingFavoriteAPI}) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [arPosts, setArPosts] = useState([])

  // Лимит загрузки постов
  let limitLoadingAPI = 10
  // Последнее имя загруженного поста
  let afterNameLoadingAPI = null

  // Запускаем сразу загрузку
  useEffect(() => {
    loadingPostsAPI();
  }, [])

  // Ждем пока обновится массив и задаем имя последнего поста
  useEffect(() => {
    if (arPosts.length !== 0) {
      afterNameLoadingAPI = arPosts[arPosts.length - 1].data.name
    }
  }, [arPosts])

// Загрузка постов
  const loadingPostsAPI = () => {
    fetch(`https://www.reddit.com/r/cats.json?limit=${limitLoadingAPI}&after=${afterNameLoadingAPI}`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.data.children.length !== 0) {
            setIsLoaded(true)
            // Объединяем массивы
            setArPosts([...arPosts, ...result.data.children])
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error)
        }
      )
  }

  //Выбор лимита загрузки
  const showPostsSet = event =>{
    limitLoadingAPI = event.target.value;
  }

  //Добавляем в избранное
  const addFavorite = (id) => {
    let arLocal = localStorage.getItem('arFavoriteId')

    if (arLocal == null) {
      localStorage.setItem('arFavoriteId', JSON.stringify([id]))
    }
    else {
      if (arLocal.includes(id)) {
        alert('This kitty is already in the favorites 😼')
      }
      else {
        arLocal = JSON.parse(arLocal)
        console.log(arLocal)
        localStorage.setItem('arFavoriteId', JSON.stringify([...arLocal, ...[id]]))
      }
    }
  }

  return (
    <div>
      <PostsList
        error={error}
        isLoaded={isLoaded}
        arPosts={arPosts}
        loadingPostsAPI={loadingPostsAPI}
        showPostsSet={showPostsSet}
        addFavorite={addFavorite}
      />
    </div>
  )
}

export default Posts;