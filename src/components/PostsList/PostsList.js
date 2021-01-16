import React from 'react'
import PostsItem from "../PostsItem/PostsItem"
import Preloader from "../Preloader/Preloader";
import InfiniteScroll from 'react-infinite-scroll-component'

const PostsList = props => {
  if (props.error) {
    return <div>Ошибка: {props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <Preloader />;
  } else {
    return (
      <InfiniteScroll
        dataLength={props.arPosts.length}
        next={() => props.loadingAPI()}
        hasMore={true}
        className="row"
      >
        {props.arPosts.map((item, index) => (
          !(item.data.thumbnail === "self") ?
            (
              <PostsItem
                key={index}
                item={item.data}
                funcTest={props.funcTest}
              />
            ) : null
        ))}
      </InfiniteScroll>
    );
  }
}

export default PostsList;