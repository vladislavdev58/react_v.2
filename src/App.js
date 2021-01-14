import React from 'react'
import './App.scss';
import Posts from './containers/Posts/Posts'
import Favorite from "./containers/Favorite/Favorite";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <Posts/>
        </div>
        <div className="col-3">
          <Favorite/>
        </div>
      </div>
    </div>
  );
}

export default App;
