import React from 'react'
import FavoriteItem from "../FavoriteItem/FavoriteItem"
import Preloader from "../Preloader/Preloader";

const FavoriteList = props => {
  if (props.error) {
    return <div>Ошибка: {props.error.message}</div>;
  } else if (props.emptyArray) {
    return (
      <React.Fragment>
        <p className="text-uppercase text-center pb-2">Empty ☹</p>
      </React.Fragment>
    )
  } else if (!props.isLoaded) {
    return <Preloader/>;
  } else {
    return (
      <React.Fragment>
        {props.arFavorite.map((item, index) => (
          (
            <FavoriteItem
              key={index}
              item={item.data}
              removeFavoriteItem={props.removeFavoriteItem}
            />
          )
        ))}
      </React.Fragment>
    );
  }
}

export default FavoriteList;