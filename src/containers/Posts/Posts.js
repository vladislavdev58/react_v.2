import React, {useState} from 'react'
import PostsList from '../../components/PostsList/PostsList'

function Posts() {
  const [arPosts, setArPosts] = useState([
    {
      title: 'fdgfd', id: "1"
    },
    {
      title: 'gtrgrde', id: "2"
    },
    {
      title: 'gyrfhrtshb',
      id: "3"
    }
  ]);

  const [loading, setLoading] = useState(false);

  const loadingAPI = () => {
    fetch('https://www.reddit.com/r/cats.json?limit=10')
      .then(res => res.json())
      .then(
        (result) => {
          setArPosts(result.data.children);
          setLoading(true);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    console.log(arPosts);
  }

  const funcTest = str => {
    setArPosts([{title: 'fdgdf', id: "1"}, {title: 'ggggggggg', id: "2"}, {title: 'gyrfhfffffffffffffrtshb', id: "3"}]);
  }
  return (
    <div>
      <PostsList
        arPosts={arPosts}
        loading={loading}
        funcTest={funcTest}
      />
      <button onClick={() => loadingAPI()}></button>
    </div>
  )
}

export default Posts;