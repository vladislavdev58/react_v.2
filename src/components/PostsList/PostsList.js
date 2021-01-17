import React from 'react'
import PostsItem from "../PostsItem/PostsItem"
import Preloader from "../Preloader/Preloader";
import InfiniteScroll from 'react-infinite-scroll-component'
import ShowPostsLimit from "../ShowPostsLimit/ShowPostsLimit";

const PostsList = props => {
  if (props.error) {
    return <div>Ошибка: {props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <Preloader/>;
  } else {
    return (
      <React.Fragment>
        <ShowPostsLimit
          showPostsSet={props.showPostsSet}
        />
        <InfiniteScroll
          dataLength={props.arPosts.length}
          next={() => props.loadingPostsAPI()}
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
                  addFavorite={props.addFavorite}
                />
              ) : null
          ))}
        </InfiniteScroll>
      </React.Fragment>
    );
  }
}

export default PostsList;