import React, { useState } from 'react'
import PostsItem from "../../components/PostsItem/PostsItem";

function Favorite() {
  const [arPosts, setArPosts] = useState([{title: 'fdgfd', id: "1"}, {title: 'gtrgrde', id: "2"}, {title: 'gyrfhrtshb', id: "3"}]);
  console.log(arPosts);

  const funcTest = str => {
    console.log(str);
  }

  return(
    <PostsList
      arPosts={arPosts}
      funcTest={funcTest}
    />
  )
}

export default Favorite;