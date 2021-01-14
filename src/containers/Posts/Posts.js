import React, {useState, useEffect} from 'react'
import PostsList from '../../components/PostsList/PostsList'
import './Posts.scss'

const Posts = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [arPosts, setArPosts] = useState([])

  // Лимит загрузки постов
  let limitLoadingAPI = 10
  // Последнее имя загруженного поста
  let afterNameLoadingAPI = null

  // Запускаем сразу загрузку
  useEffect(() => {
    loadingAPI();
  }, [])

  // Ждем пока обновится массив и задаем имя последнего поста
  useEffect(() => {
    if (arPosts.length !== 0) {
      afterNameLoadingAPI = arPosts[arPosts.length - 1].data.name
      console.log(afterNameLoadingAPI);
    }
  }, [arPosts])

// Загрузка постов
  const loadingAPI = () => {
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

  return (
    <div>
      <PostsList
        error={error}
        isLoaded={isLoaded}
        arPosts={arPosts}
        loadingAPI={loadingAPI}
      />
    </div>
  )
}

export default Posts;