import React from 'react';
import { Provider } from 'react-redux';
import store from "../store/store";
import Post from "../post/Post";

const Content = () => {
  return (
    <Provider store={store}>
      <div className="flex justify-center m-12">
        <Post />
      </div>
    </Provider>
  );
};

export default Content;