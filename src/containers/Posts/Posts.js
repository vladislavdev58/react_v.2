import React, {useState, useEffect} from 'react'
import PostsList from '../../components/PostsList/PostsList'

function Posts() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [arPosts, setArPosts] = useState([]);

  let limitLoadingAPI = 10;
  let afterNameLoadingAPI = null;

  useEffect(() => {
    loadingAPI();
  }, [])

  useEffect(() => {
    if (arPosts.length !== 0) {
      afterNameLoadingAPI = arPosts[arPosts.length - 1].data.name;
      console.log(afterNameLoadingAPI)
    }
  }, [arPosts])

// Доделать последние имя загрузки
  const loadingAPI = () => {
    fetch(`https://www.reddit.com/r/cats.json?limit=${limitLoadingAPI}&after=${afterNameLoadingAPI}`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.data.children.length !== 0) {
            setIsLoaded(true);
            setArPosts([...arPosts, ...result.data.children]);
          }
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  return (
    <div>
      <PostsList
        error={error}
        isLoaded={isLoaded}
        arPosts={arPosts}
      />
      <button onClick={() => loadingAPI()}></button>
    </div>
  )
}

export default Posts;